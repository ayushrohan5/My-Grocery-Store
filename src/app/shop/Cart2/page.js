"use client";
import React, { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getCartTotal2, remove2 } from '@/app/store2/CartSlice2';
import { createDispatchHook, createSelectorHook } from 'react-redux';
import { Store2Context } from '@/app/store2/Contexts';
import { Store1Context } from '@/app/store/Contexts';


const Cartpage2 = () => {
   
  
   const useStore2Dispatch = createDispatchHook(Store2Context);
   const useStore2Selector = createSelectorHook(Store2Context);

  const dispatch2 =useStore2Dispatch();
    
     
    const cartitems = useStore2Selector(
        (state) => state.allCart2.cart2
      );
     
      // const {totalPrice} = useStore2Selector(
      //   (state) => state.allCart2
      // );
      
      useEffect(() => {
        dispatch2(getCartTotal2());
      }, [cartitems]);
      
  
    
    
    const [products ,setProducts]=useState([])
    const useStore1Selector = createSelectorHook(Store1Context);
    const totalPrice = (products || []).reduce((total, item) => total + item.price, 0);
    const { userData } = useStore1Selector((state) => state.auth);
    const userid = userData && userData.data ? userData.data.id:'';
    // get user fav list 
    const getFavlist = async() =>{
      const product = await fetch(`http://localhost:4000/products/getfavourites/${userid}`);
      const data = await product.json();
       console.log("favlist",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
      setProducts(data.favorites);
    }
    const handleremove = async(id) => {
      const productId = id;
      const userId = userid;
      console.log("productId and userID for remove ---->",productId,userid);
      const response = await fetch('http://localhost:4000/products/deletefavproduct',{
         method: 'DELETE',
         headers: {
          'Content-Type': 'application/json'  
      }, 
         body:JSON.stringify({productId, userId})
      })
      if(response.ok){
          console.log('Product remove from Checkout  list');
         getFavlist();
      }
      else{
          console.log('Failed to remove product from the Checkout list!!!');
      }
    }
  
    useEffect(()=>{
      getFavlist();
    },[])
  return (
    
    <div className='px-[200px]'>
        <h3 className='text-center mt-5 font-black text-4xl'>Wishlist</h3>
    
         {/* <div><Link href="/" >Home</Link></div> */}
        <div className='cartWrapper'>
            {
                
                products.map((item)=>(
                  
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

export default Cartpage2