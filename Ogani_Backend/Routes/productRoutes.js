// routes/productRoutes.js
const express = require('express');
const { addProducts, getProducts,upload, addProductToFavorites, getFavourites, deleteFavourite, addCheckoutsProducts, getCheckoutsProducts, removeCheckoutProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/addProducts',upload.single('profileImage'), addProducts);
router.get('/getProducts', getProducts);

// user Fav list route --->
router.post('/addfovourites',addProductToFavorites);
router.get('/getfavourites/:id',getFavourites);
router.delete('/deletefavproduct',deleteFavourite);

// user checkouts list ---->
router.post('/addChcekouts',addCheckoutsProducts);
router.get('/getCheckoutslist/:id',getCheckoutsProducts);
router.delete('/removecheckoutProduct',removeCheckoutProducts);

module.exports = router;
