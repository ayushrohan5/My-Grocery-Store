'use client'
import { Store1Context } from "@/app/store/Contexts";
import React , {useState ,useEffect} from "react";
import { FaRegHeart } from "react-icons/fa";
import {  createSelectorHook, useSelector } from 'react-redux'



const Product = () =>{
  const useStore1Selector = createSelectorHook(Store1Context);
  const { userData } = useStore1Selector((state) => state.auth);
  const userid = userData && userData.data ? userData.data.id:'';

  const [products ,setProducts]=useState([])

 
   const getProducts = async() =>{
    const product = await fetch('http://localhost:4000/products/getProducts');
    const data = await product.json();
    // console.log("yrfyjjjyjg",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
    setProducts(data.products);
   }

  const handleaddToCart = async (product) =>{
    const userId = userid;
    console.log("cart userid", userId)
    const productId = product.id;
    console.log("add Chcekouts ------",{userId,productId})
    try {
        const response = await fetch('http://localhost:4000/products/addChcekouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, productId })
        });
        //  console.log("fav response----",response)
        if (response.ok) {
          const result = await response.json();
          // console.log('Product added to Checkouts List:', result);
          alert("added to cart")
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
    //  console.log(product);
  }
 
  const handleaddfav = async (product) => {
    const userId = userid;
    const productId = product.id;
    console.log("add fav ------",{userId,productId})
    try {
        const response = await fetch('http://localhost:4000/products/addfovourites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, productId })
        });
        //  console.log("fav response----",response)
        if (response.ok) {
          const result = await response.json();
          alert("added to wishlist")
          console.log('Product added to favorites:', result);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};


  useEffect(()=>{
    getProducts();
  },[])
  //  console.log("heloo",products);
  return (
    <div id="div1">
        {
  <div className='productsWrapper  py-5 ml-[160px] mr-[160px]  lg:grid lg:grid-cols-4 lg:gap-3 sm:px-[10px]' id ='prodsection'>
          {
           products.map((product)=>(
              <div key={product.id} className='card px-5 py-3 flex sm:flex-wrap justify-between gap-[20px] '>
                                <FaRegHeart  className="text-[21px] hover:bg-red-500 absolute left-[237px] " onClick={()=>handleaddfav(product)} />

                  <img src={product.image} alt='img' className="h-[200px]"/>
                  
                  <h6 className="mt-3 text-center">{product.title}</h6>
                  <h5 className="mt-3 text-center font-black">Rs:{product.price}</h5>
                  <button className='btn btn-primary hover:bg-green-300' onClick={()=>handleaddToCart(product)}>Add to cart</button>
                 
                 
              </div>
            ))
          }
    </div>}
      </div>
  )
}
export default Product;

// 'use client'
// import React , {useState ,useEffect} from "react";
// // import { AiOutlineShoppingCart } from "react-icons/ai";
// // import { FaRetweet } from "react-icons/fa";
// // import { MdFavorite } from "react-icons/md";


// import { FaRegHeart } from "react-icons/fa";
// import { add2 } from "@/app/store2/CartSlice2";

// import { createDispatchHook, createSelectorHook } from 'react-redux';
// import {  Store2Context } from "@/app/store2/Contexts";
// import { Store1Context } from "@/app/store/Contexts";
// import { add } from "@/app/store/CartSlice";

// const Product = () =>{
//   const [products ,setproducts]=useState([])
//   const useStore1Dispatch = createDispatchHook(Store1Context);
//    const useStore1Selector = createSelectorHook(Store1Context);
  
//    const useStore2Dispatch = createDispatchHook(Store2Context);
//    const useStore2Selector = createSelectorHook(Store2Context);
//   const dispatch1 =useStore1Dispatch();
//   const dispatch2 =useStore2Dispatch();
   
//   const getproducts =async()=>{
//     const res =await fetch("http://localhost:8085/api/products/allProducts");
//     const data =await res.json();
//     setproducts(data);
//   }

//   const handleadd =(product)=>{
//      dispatch1(add(product));
//     alert("Add to cart successfull")
//   }
 

//   const handleadd2 =(product)=>{
//     dispatch2(add2(product));
//    alert("Added to wishlist") 
//  }

//   useEffect(()=>{
//    getproducts();
//   },[])
 
//   return (
//     <div className='relative productsWrapper px-[200px] py-5  lg:grid lg:grid-cols-4 lg:gap-3 sm:px-[10px]' id ='prodsection'>
//           {
//             products.map((product)=>(
//               <div key={product.id} className='card px-5 py-3 flex sm:flex-wrap justify-between gap-[20px] '>
              
//                 <FaRegHeart  className="text-[21px] hover:bg-red-500 absolute left-[237px] " onClick={()=>handleadd2(product)} />
//                   <img src={product.image} alt='img' className="h-[200px]"/>
                  
//                   <h6 className="mt-3 text-center">{product.title}</h6>
//                   <h5 className="mt-3 text-center font-black">Rs:{product.price}</h5>
//                   <button className='btn btn-primary hover:bg-green-300' onClick={()=>handleadd(product)}>Add to cart</button>
//               </div>
//             ))
//           }
//     </div>
//   )
// }
// export default Product;


// 'use client'
// import Image from 'next/image'
// import man from '../../../../public/feature-2.jpg'
// // import { useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap'
// import { add } from '@/app/store/CartSlice'
// import { useDispatch } from 'react-redux'

// function Product() {
// // const [products, setProducts] =useState([]);
// //   useEffect(()=>{
// //     const fetchProducts = async () =>{
// //       const res = await fetch('https://fakestoreapi.com/products');
// //       const data = await res.json();
// //       setProducts(data);

// //     };
// //     fetchProducts();
// //   }, []);

// const dispatch = useDispatch()

// const handleAdd = (product) =>{
//   dispatch(add(product));
// }

//   return (
//     <div className='pr-[200px] pl-[200px] mb-10 mt-10 relative'>
//     <div className='  flex pb-[12px] justify-center'>
//       <span className='text-4xl font-bold mb-[24px]'>Featured Product</span>
    
//     </div>

//     <div className=' ml-[500px] w-[100px]  h-[4px] bg-[#84cc16] mb-10  mt-3 hidden sm:hidden'>
//     </div>

//       <div className='flex justify-center gap-[3rem] sm:gap-[1rem]'>
//         <a href='#app' className='text-xl'>All</a>
//         <a href='#app' className='text-xl'>Orange</a>
//         <a href='#app' className='text-xl'>Fresh Meat</a>
//         <a href='#app' className='text-xl'>Vegetable</a>
//         <a href='#app' className='text-xl'>Fast Food</a>
//         </div> 

//         <div className='mt-10'>
//              <div className='flex sm:flex-wrap justify-between gap-[20px]'>
//                 <div className='sm:absolute sm:right-[17%] '  id ='1'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] ' onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:right-[17%] sm:top-[392%]'  id='2'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] ' onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:top-[547%] sm:right-[17%]' id='3'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] '  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:right-[17%] sm:top-[237%]' id='4'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                <span className=' mt-4 flex justify-center font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] '  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//             </div> 
//             {/* <div className='grid grid-cols-4 gap-[20px]'>
//             {
//               products.map((product)=>(
              
                
//                 <div className='sm:absolute  bg-white items-center p-[20px] m-[30px]  sm:right-[17%]'>
//                 <Image src={product.image}  width={80} height={80} className='sm:max-w-[255px]' />
//                 <span >Crab Pool Security</span>
//                 <span>{product.price}</span>
//                 </div>
              
                
//               ))
//             }
//             </div> */}
// <div className='mt-10'>
//             <div className='flex sm:flex-wrap justify-between gap-[20px] ' id='5'>
//                 <div className='sm:absolute sm:hidden'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] sm:ml-[0]'  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:hidden' id='6'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] sm:ml-[0]'  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:hidden' id='7'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] sm:ml-[0]'  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//                 <div className='sm:absolute sm:right-[17%] sm:top-[707%]' id='8'>
//                 <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
//                 <span className='flex justify-center mt-3'>Crab Pool Security</span>
//                 <span className='flex justify-center mt-4 font-bold'>$30.00</span>
//                 <Button className='flex justify-center mt-3 font-bold btn ml-[70px] sm:ml-[0]'  onClick={()=> handleAdd()}>Add to cart</Button>
//                 </div>
//             </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Product
