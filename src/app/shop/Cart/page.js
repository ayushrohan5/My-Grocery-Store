"use client";
import React, { useEffect, useState } from 'react'
import { getCartTotal } from '@/app/store/CartSlice';
import { createDispatchHook, createSelectorHook, useDispatch,useSelector } from 'react-redux';
import { remove } from '@/app/store/CartSlice';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { Store1Context } from '@/app/store/Contexts';


const Cartpage = () => {
  

  const useStore1Dispatch = createDispatchHook(Store1Context);
   const useStore1Selector = createSelectorHook(Store1Context);
   const [products ,setProducts]=useState([])
   const { userData } = useStore1Selector((state) => state.auth);
  //  const cartitems = useStore1Selector(
  //   (state) => state.allCart.cart1
  // );
   const userid = userData && userData.data ? userData.data.id:'';
   const totalPrice = (products || []).reduce((total, item) => total + item.price, 0);
  //  console.log("item checkout total price---------",totalPrice)
  
   const getCartList = async() =>{
    const product = await fetch(`http://localhost:4000/products/getCheckoutslist/${userid}`);
    const data = await product.json();
    // console.log("yrfyjjjyjg ------------",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
    setProducts(data.checkouts);
   }

  const dispatch2 =useStore1Dispatch();
    
     
    
      
      // const {totalPrice} = useStore1Selector(
      //   (state) => state.allCart
      // );
      
      // useEffect(() => {
      //   dispatch2(getCartTotal());
      // }, [cartitems]);
      
  
      const handleremove = async(id) => {
        const productId = id;
        const userId = userid;
        console.log("productId and userID for remove ---->",productId,userid);
        const response = await fetch('http://localhost:4000/products/removecheckoutProduct',{
           method: 'DELETE',
           headers: {
            'Content-Type': 'application/json'  
        }, 
           body:JSON.stringify({productId, userId})
        })
        if(response.ok){
            console.log('Product remove from Checkout  list');
           getCartList();
        }
        else{
            console.log('Failed to remove product from the Checkout list!!!');
        }
      }
    
    useEffect(()=>{
      getCartList();
    },[])
    
    // console.log("fvbgju--------",products.length)
  return (
    
    <div className='px-[200px]'>
        <h3 className='text-center mt-5 font-black text-4xl'>Cart page</h3>
    
         {/* <div><Link href="/" >Home</Link></div> */}
        <div className='cartWrapper'>
            {
                
                (products || []).map((item)=>(
                  
                    <>
                    <div className='Card flex justify-between my-5 border-4 p-3 items-center'>
                       
                        <img src={item.image} alt='img' className="h-[200px] w-[200px]"/>
                        <h6 className="mt-3 text-center">{item.title}</h6>
                        <h5 className="mt-3 text-center font-black" >Rs:{item.price}</h5>
                       
                        
                        <button className='btn  bg-red-500 hover:bg-red-300' onClick={()=>handleremove(item.id)}>Remove</button>
                      
                    </div>
                   
                      </>
                     
                ))
            }
<div className='mt-[10px] mb-[20px]'><span className='pl-[100px] text-lg'>Rs. {totalPrice}</span><Link href="/shop/Payment"><Button className='btn btn primary text-green ml-[18px]'>Proceed to payment</Button></Link></div>
        </div>
    </div>
  )
}

export default Cartpage