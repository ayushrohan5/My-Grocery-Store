const express = require('express');
const { registerUser, userLogin, userProfile,verifyToken } = require('../controllers/userController');



const router = express.Router();

router.post('/registerUser',registerUser);
router.post('/login',userLogin);
router.post('/profile',verifyToken,userProfile);

// Payement method integration 


module.exports = router;