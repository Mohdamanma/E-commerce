import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null)

function getDefaultCart() {
    let cart = {}
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart())
    const [all_product, setAllproduct] = useState([])


    useEffect(() => {
        fetchData()
        getCartData()
    }, [])

    const getCartData = async () => {
        if (localStorage.getItem('auth-token')) {
            await fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json'
                },
                body: ''
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("CART:", data)
                    setcartItems(data)
                })
        }
    }

    const fetchData = async () => {
        await fetch('http://localhost:4000/allproduct')
            .then((res) => res.json())
            .then((data) => setAllproduct(data))
    }

    function getTotalCartAmount() {
        let totalAmount = 0
        for (const item in cartItems) {
            // console.log("cart Item are :", cartItems)
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id == item)
                totalAmount = itemInfo.new_price + totalAmount * cartItems[item]
            }
        }
        return totalAmount
    }

    function getTotalCartItem() {
        let totalCartItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItem = cartItems[item] + totalCartItem
            }
        }
        return totalCartItem
    }


    const addToCart = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            await fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    itemId: itemId
                })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }
    const removeToCart = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            await fetch('http://localhost:4000/removetocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    itemId: itemId
                })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }




    const contextValue = { all_product, addToCart, cartItems, removeToCart, getTotalCartAmount, getTotalCartItem }

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider