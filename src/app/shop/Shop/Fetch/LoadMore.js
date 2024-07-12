'use client'
import { useState, useEffect } from 'react'

function LoadMore() {
  const [products, setProducts] =useState([]);
  useEffect(()=>{
    const fetchProducts = async () =>{
      const res = await fetch('https://fakestoreapi.com/products', { mode: 'no-cors' });
      const data = await res.json();
      setProducts(data);

    };
    fetchProducts();
  }, []);
  <div className='grid grid-cols-4 gap-[20px]'>
            {
              products.map((product)=>(
                
                
                <div className='sm:absolute  bg-white items-center p-[20px] m-[30px]  sm:right-[17%]'>
                <Image src={product.image}  width={80} height={80} className='sm:max-w-[255px]' />
                <span >Crab Pool Security</span>
                <span>{product.price}</span>
                </div>
              
                
              ))
            }
            </div>
  
}

export default LoadMore
