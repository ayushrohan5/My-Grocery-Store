// controllers/productController.js
const { Product,Favourites, User, Checkouts } = require('../models/index');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const  upload = multer({ storage })

const addProducts = async(req,res)=>{
  const { title, price, category } = req.body;
  const image = req.file ? req.file.path : null;
  const product = await Product.create({
    title,
    price,
    category,
    image
  });
  res.send({
    message: "Data Sent Successfully",
    product
  })
}


// const addProducts = async (req, res) => {

//     const product = await Product.create(req.body);
//     res.send({
//         message: "Data Sent successfully",
//         product
//     });
// }


const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.send({
        message: "Product Finds",
        products
    })
}

const addProductToFavorites = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Check if the product exists
    const product = await Product.findByPk(productId);
    // console.log("favvvvvvvvvv---------",product)
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    // Check if the product is already in the user's favorites
    const existingFavorite = await Favourites.findOne({
      where: {
        userId: userId,
        productId: productId
      }
    });

    if (existingFavorite) {
      return res.status(400).send({ message: 'Product already exists in favorites' });
    }

    // Add the product to the user's favorites
    await Favourites.create({
      userId: userId,
      productId: productId
    });

    return res.status(200).send({ message: 'Product added to favorites successfully' });
  } catch (error) {
    console.error('Error adding product to favorites:', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

const getFavourites = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the user exists
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Get the user's favorite products
    const favorites = await Favourites.findAll({
      where: {
        userId: id,
      },
    });

    if (!favorites.length) {
      return res.status(200).send({ favorites: [] });
    }
    const productIds = favorites.map(favorite => favorite.dataValues.productId);

    // fetch all product details
    const products = await Product.findAll({
      where: {
        id: productIds,
      },
    });

    return res.status(200).send({ favorites: products });
  } catch (error) {
    console.error('Error retrieving user favorites:', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
}

// remove favourite products from the database
const deleteFavourite = async (req, res) =>{
  const {productId, userId} = req.body;
  try {

    const result = await Favourites.destroy({
      where: {
        productId,
        userId,
      },
    });

    if (result) {
      res.send({ message: 'Product removed from favourites successfully.' });
    } else {
      res.send({ message: 'Product not found in favourites for this user.' });
    }
  } catch (error) {
    console.error('Error removing product from favourites:', error);
    res.send({ message: 'Internal server error.' });
  }

}


// All CheckOuts Methos  ---> add remove and get

// add product in checkouts list
const addCheckoutsProducts = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Check if the product exists
    const product = await Product.findByPk(productId);
    // console.log("checkoiuts --------",product)
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    // Check if the product is already in the user's checkout list
    const existingCheckouts = await Checkouts.findOne({
      where: {
        userId: userId,
        productId: productId
      }
    });

    if (existingCheckouts) {
      return res.status(400).send({ message: 'Product already exists in checkouts list' });
    }

    // Add the product to the user's checkouts list
    await Checkouts.create({
      userId: userId,
      productId: productId
    });

    return res.status(200).send({ message: 'Product added to checkout list successfully' });
  } catch (error) {
    console.error('Error adding product to checkouts :', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};

// get Checkouts products list ---->>>>>>>>>>>>
const getCheckoutsProducts = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the user exists
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Get the user's Checkouts list products
    const checkoutsProducts = await Checkouts.findAll({
      where: {
        userId: id,
      },
    });

    if (!checkoutsProducts.length) {
      return res.status(200).send({ favorites: [] });
    }
    const productIds = checkoutsProducts.map(favorite => favorite.dataValues.productId);

    // fetch all product details
    const products = await Product.findAll({
      where: {
        id: productIds,
      },
    });

    return res.status(200).send({ checkouts: products });
  } catch (error) {
    console.error('Error retrieving user checkoutslist:', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
}

// remove products from the checkouts list
const removeCheckoutProducts = async (req, res) =>{
  const {productId, userId} = req.body;
  try {

    const result = await Checkouts.destroy({
      where: {
        productId,
        userId,
      },
    });

    if (result) {
      res.send({ message: 'Product removed from checkouts list successfully.' });
    } else {
      res.send({ message: 'Product not found in checkout list for this user.' });
    }
  } catch (error) {
    console.error('Error removing product from checkouts:', error);
    res.send({ message: 'Internal server error.' });
  }

}




module.exports = {
    addProducts,
    getProducts,
    upload,
    addProductToFavorites,
    getFavourites,
    deleteFavourite,
    addCheckoutsProducts,
    getCheckoutsProducts,
    removeCheckoutProducts
};
