'use client'

import { IoIosArrowDown } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdCall } from "react-icons/io";
import Image from 'next/image'
import banner1 from '../DptSection/banner1.jpg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { createDispatchHook, createSelectorHook, useDispatch } from "react-redux";

import { Store1Context } from "@/app/store/Contexts";




function DptSection({ setResults = () => {} }) {
  const [input, setInput] = useState("");
  const [change ,setChange] = useState([]);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(true);
  const handleDiv1Click = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };
  
  const handleDiv2Click = () => {
    setShowDiv1(false);
    setShowDiv2(true);
  };

  
  const [isOpen, setIsOpen] = useState(true);
  
  const useStore1Selector = createSelectorHook(Store1Context);
  const { userData } = useStore1Selector((state) => state.auth);
  const userid = userData && userData.data ? userData.data.id:'';

  const [products ,setProducts]=useState([])

 
   const getProducts = async() =>{
    const product = await fetch('http://localhost:4000/products/getProducts');
    const data = await product.json();
   const data2 = data.products.slice(0,3)
    // console.log("yrfyjjjyjg",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
    setProducts(data2);
   }
   const getProducts2 = async() =>{
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
          console.log('Product added to favorites:', result);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};


  useEffect(()=>{
    getProducts();
  },[])
 
  

 
  const fetchData = (value) => {
    fetch("http://localhost:4000/products/getProducts")
      .then((response) => response.json())
      .then((json) => {
        const results = json.products.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);

      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  
  
  return (
   <>
    <div className='flex sm:flex-col'><div className="col-lg-3">
          <details className="dropdown ml-[92px] mt-[15px] sm:mt-[0] sm:ml-[0]" open={isOpen} >
            <summary className="px-[25px] sm:px-[11px] sm:py-[11px] py-[10px] sm:w-[25rem] sm:mt-[15px] sm:ml-[7px]   bg-[#84cc16] flex gap-10 hover:bg-[#84cc16]  text-black font-bold  sm:hover:bg-[#84cc16] ">
            <GiHamburgerMenu />All Department <FaAngleDown className="pt-1" />
            </summary>
           
             <ul className="px-[50px] py-[10px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Meat
              </li>
              </div>
            
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Vegetable
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fruit & nut gifts
              </li>
              </div>

              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Berries
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                ocean foods
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Butter
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fast food
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh onion
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Papaya
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
              Oatmeal
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={getProducts} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
              Fresh banana
              </li>
              </div>
            </ul> 
          </details>

          <div className="flex justify-between mt-3 ">
    
   <button 
  onClick={handleDiv2Click} 
  className={`bg-[#84CC16] px-2 py-1 absolute left-[7%] top-[82%] rounded-md ${showDiv1 ? '' : 'opacity-20 cursor-not-allowed'}`}
>
  Show Banner
</button>
</div>
        </div>
  <div className='w-[610px] sm:w-[349px] sm:ml-[10px] sm:pl-[0px] border-solid border-[1px] h-[50px] items-center flex pl-[5px] relative ml-[33px] mt-[14px] '>

  <div className='flex divide-x-2 divide-gray-300 '>

<div className='flex items-center sm:hidden '>
<details className="dropdown   sm:mt-[0] sm:ml-[0]" onClick={getProducts2} >
            <summary className="px-[25px] sm:px-[11px] sm:py-[11px] py-[10px] sm:w-[25rem] sm:mt-[15px] sm:ml-[7px]    flex gap-10  text-black font-bold  sm:hover:bg-[#84cc16] ">
            All Category <FaAngleDown className="pt-1" />
            </summary>
            <div className="px-[50px] py-[10px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
  {
    Array.from(new Set(products.map(product => product.category)))
      .map(category => (
    <Link href='#prodsection'>   <li key={category}  className="mb-[1px] mt-3 sm:mb-[5px] font-bold"> 
          {category}
        </li></Link>
        
      ))
  }
  
</div>
            {/* <div className="px-[50px] py-[10px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box" >
          {
            change.map((product)=>(
              <li key={product.id}  className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                  
                  {product.category}
              </li>
            ))
          }
    </div> */}
            {/* <ul className="px-[50px] py-[10px] shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Meat
              </li>
              </div>
            
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Vegetable
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fruit & nut gifts
              </li>
              </div>

              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh Berries
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                ocean foods
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Butter
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fast food
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Fresh onion
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
                Papaya
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
              Oatmeal
              </li>
              </div>
              <div onClick={handleDiv1Click}>
              <li onClick={handlefetch} className="mb-[1px] mt-3 sm:mb-[5px] font-bold ">
              Fresh banana
              </li>
              </div>
            </ul> */}
          </details>
</div>

<div className='flex gap-2  px-4   '>
<input type='text' placeholder="What do yo u need ? "   value={input}
        onChange={(e) => handleChange(e.target.value)} className="outline-none"></input>
<Link href='#prodsection'><Button  className='buttoncol hover:bg-green-700 text-white left-[82%] bottom-[1px] absolute border-none rounded-none mb-[0.22px] w-[111px]'>Search</Button></Link>
</div>

</div>

  </div>
  <div className='ml-[45px] mt-[18px]'>
  <div className='flex'>
  <IoMdCall className='mt-[6px] text-[20px]' />
  <span className='ml-[15px]'>+65 11.188.888</span></div>
  <div>
  <h1 className='ml-[30px] text-xs'>support 24/7 time</h1></div>
  </div>
  </div>

  {showDiv2 &&  (
  <div id="div2">
  <div className='relative pl-[492px] sm:pl-[6px] pt-[30px]' >
       <Image src={banner1} height={950} width={840} className='sm:max-w-[403px]'></Image>
       <div className='absolute sm:bottom-[7%] bottom-[25%] sm:left-[4%] left-[37%]'>
        <h1 className='text-green-600 sm:text-sm  sm:pb-[2px]'>FRUIT FRESH</h1>
        <p className=' text-bold sm:text-[24px] text-[33px] font-bold sm:pb-[2px] sm:mb-[0]'>Vegetable <br /> 100%  Organic</p>
        <p className='pb-[12px] sm:text-sm text-gray-500 sm:pb-[9px] sm:mb-[0]'>Free Pickup and Delivery Available</p>
     <Link href='#prodsection'>  <Button  className='bg-green-500 buttoncol2 hover:bg-green-700 text-white border-none rounded-none  w-[150px]'>SHOP NOW</Button></Link> 
       </div>
  </div>
  </div>
)}
{showDiv1 && (
  <div id="div1">
        {
  <div className='productsWrapper px-[200px] py-5 ml-[240px]  lg:grid lg:grid-cols-3 lg:gap-3 sm:px-[10px]' id ='prodsection'>
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
)}
  </>
  )
}

export default DptSection