const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./Routes/productRoutes')
const userRoute = require('./Routes/userRoute')



const app = express();
const coreOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(coreOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static('uploads'))

app.get('/', async (req, res) => {
    res.send("Hello");
});

// app.post('/upload',upload.single('profileImage'), (req,res)=>{
//    console.log(req.body);
//    console.log(req.file)
// })
app.use('/products', productRoutes);  // Use the product routes

app.use('/user',userRoute);


app.listen(4000, () => {
    console.log(`App is running on Port 4000`);
});
