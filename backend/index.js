const PORT = 4000
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Enable CORS for all routes
app.use(cors());

// Database Connection With Mongodb

mongoose.connect('mongodb+srv://muhammedaman986:aman369@cluster0.qzezx.mongodb.net/Ecommerce?retryWrites=true&w=majority')

//API Creaction

app.get('/', (req, res) => {
  res.send('Express App is Running')
})

const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
}
)
const upload = multer({ storage })

//Creating Upload
app.use('/images', express.static('uploads/images'))
//Upload Image
app.post('/upload', upload.single('product'), (req, res) => {
  res.send({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  })
  // console.log(req.file)
})


//Schema for Creating Product

const Product = mongoose.model('Product', {
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  old_price: {
    type: Number,
    required: true
  },
  new_price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avaliable: {
    type: Boolean,
    default: true
  }
})


//Add Product
app.post('/addproduct', async (req, res) => {
  let products = await Product.find({})
  let id
  if (products.length > 0) {
    let last_product_array = products.slice(-1)
    let last_product = last_product_array[0]
    id = last_product.id + 1
  } else {
    id = 1
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    old_price: req.body.old_price,
    new_price: req.body.new_price,
    category: req.body.category
  });
  console.log(product)
  await product.save()
  console.log("Saved")
  res.json({
    success: true,
    name: req.body.name
  })
})

// Removing Product
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id })
  res.json({
    success: true,
    name: req.body.name
  })
})


//Getting All Product

app.get('/allproduct', async (req, res) => {
  let products = await Product.find({})
  console.log("All product Fetched")
  res.send(products)
})



//Create Schema UserModel

const Users = mongoose.model('Users', {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  cartData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
})


// signup Endpoint for Registring User

app.post('/signup', async (req, res) => {
  let check = await Users.findOne({ email: req.body.email })
  if (check) {
    return res.status(400).json({
      success: false,
      error: "Email is Already Exisit"
    })
  }
  let cart = []
  for (let i = 0; i < 300; i++) {
    cart[i] = 0
  }
  let user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  })

  const data = {
    user: user.id
  }

  const token = jwt.sign(data, 'secret', { expiresIn: 86400 })
  user.save()
  res.status(200).send({
    auth: true,
    token: token
  })
})


//Endpoint for Login

app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email })
  if (user) {
    let passCompare = req.body.password === user.password
    if (passCompare) {
      const data = {
        id: user.id
      }
      const token = jwt.sign(data, 'secret')
      res.status(200).send({
        auth: true,
        token: token,
        data: data
      })

    } else {
      res.status(500).send({
        auth: false,
        error: "incorrect password"
      })
    }
  } else {
    res.status(500).send({
      error: 'Email or Password Incorrect',
      auth: false
    })
  }
})

//MiddleWare for FetchUser
const FetchUser = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    res.status(400).send({ error: 'No Token Avaliable on LocalStorage' })
  } else {
    try {
      let data = jwt.verify(token, 'secret')
      req.user = data.user
      next()
    } catch (error) {
      res.status(400).send("Please Authenticate with Valid Token")
    }
  }
}


//Adding Product in CardData

app.post('/addtocart', FetchUser, async (req, res) => {
  console.log(req.body, req.user)
  let userData = await Users.findOne({ _id: req.user })
  userData.cartData[req.body.itemId] += 1
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData })
  res.status(200).send({
    sucess: true,
    item: "Added"
  })
})

app.listen(PORT, (error) => {
  if (!error) {
    console.log("server is Running " + PORT)
  } else {
    console.log("Error : " + error)
  }
})