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
    sucess: 1,
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


//Creating Endpoint for Registring User

app.post('/signup', (req, res) => {

})

app.listen(PORT, (error) => {
  if (!error) {
    console.log("server is Running " + PORT)
  } else {
    console.log("Error : " + error)
  }
})