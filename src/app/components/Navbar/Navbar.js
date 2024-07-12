'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../navbar/logo.png'
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createDispatchHook, createSelectorHook } from 'react-redux';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '@/app/store/CartSlice';
import { useEffect, useState } from 'react';
import { Store2Context } from '@/app/store2/Contexts';
import { Store1Context } from '@/app/store/Contexts';

 


function Navbar1() {
  const useStore1Dispatch = createDispatchHook(Store1Context);
  const useStore1Selector = createSelectorHook(Store1Context);
  
   const useStore2Dispatch = createDispatchHook(Store2Context);
   const useStore2Selector = createSelectorHook(Store2Context);
  const items = useStore1Selector((state)=>state.allCart.cart1);
   const items2= useStore2Selector((state)=>state.allCart2.cart2);
   
  const [menu, setMenu] = useState("/");
  
   
  const { userData } = useStore1Selector((state) => state.auth);
  const userid = userData && userData.data ? userData.data.id:'';

  const [products ,setProducts]=useState([]);
  const productsLength = products ? products.length : 0;

  const totalPrice2 = (products || []).reduce((total, item) => total + item.price, 0);
  const getCartList2 = async() =>{
   const product = await fetch(`http://localhost:4000/products/getCheckoutslist/${userid}`);
   const data = await product.json();
   console.log("yrfyjjjyjg ------------",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
   setProducts(data.checkouts);
  }

  const [products2 ,setProducts2]=useState([])
  const products2Length = products2 ? products2.length : 0;
  
  // get user fav list 
  const getFavlist = async() =>{
    const product = await fetch(`http://localhost:4000/products/getfavourites/${userid}`);
    const data = await product.json();
     console.log("favlist",data)  //because  we send the message in backend so first seperate the products otherwise it gives empty array
    setProducts2(data.favorites);
  }
  



  const dispatch1=useStore1Dispatch();
  const cartitems = useStore1Selector(
    (state) => state.allCart.cart1
  );
  useEffect(() => {
    dispatch1(getCartTotal());
    getCartList2();
    getFavlist();
  }, [cartitems]);
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary pl-[200px] pr-[200px] pt-[15px] pb-[15px] flex justify-between">
      <Container className='sm:pb-[16px] relative' >
        <Navbar.Brand href="/" ><Image src={logo} width={100} height={100} className='sm:max-w-[77px] ml-[123px] sm:absolute sm:right-[78%] sm:bottom-[10%]' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='sm:absolute sm:left-[84%]' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto  gap-8 sm:gap-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/" className='mt-[8px]'><span onClick={() => { setMenu("/") }} >HOME</span>
            {menu === "/" ? (
                  <div className='flex justify-center items-center'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full'></div>
                  </div>
                ) : (
                  <></>
                )}</Link>
            <Link href="/shop/Shop" className='mt-[8px]'><span  onClick={() => { setMenu("SHOP") }}>SHOP</span>
            {menu === "SHOP" ? (
                  <div className='flex justify-center items-center sm:hidden'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full sm:hidden'></div>
                  </div>
                ) : (
                  <></>
                )}</Link>
               <div className="dropdown pt-[6px] pr-[10px] dropdown-hover">
  <div tabIndex={0} 
 >Pages </div>
  
  <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-black text-white  flex flex-row ">
    <li><Link className='text-[16px] whitetext' href="/shop/Discart">Shop Details</Link></li>
    <li><Link className='text-[16px] whitetext' href="/shop/Discart">Shopping Cart </Link></li>
    <li><Link className='text-[16px] whitetext' href="/shop/Discart">Checkout</Link></li>
    <li><Link className='text-[16px] whitetext' href="/shop/Blog">Blog Details </Link></li>
   
  </ul>
</div>
              <Link   className='mt-[8px]' href="/shop/Blog"><span onClick={() => { setMenu("BLOGS") }}>BLOGS</span>
              {menu === "BLOGS" ? (
                  <div className='flex justify-center items-center sm:hidden'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full sm:hidden'></div>
                  </div>
                ) : (
                  <></>
                )}</Link>
              
            
            <Link href="/shop/Contact" className='mt-[8px]'>
            <span onClick={() => { setMenu("CONTACT") }}>CONTACT</span>
            {menu === "CONTACT" ? (
                  <div className='flex justify-center items-center sm:hidden'>
                    <div className='h-[2px] w-[30px] bg-[#45a745] rounded-full sm:hidden'></div>
                  </div>
                ) : (
                  <></>
                )}
            </Link>
          </Nav>
          <div className=' flex gap-3 pt-2 ' >
          <Link href="/shop/Discart2" > <FaHeart /></Link><span className='absolute bg-green-300 rounded right-[9.6%] bottom-[42%]'>{products2Length}</span>
        <Link href="/shop/Discart" ><HiShoppingBag /></Link><span className='absolute bg-green-300 rounded right-[7.3%] bottom-[42%]'>{productsLength}</span>
        <span>items:<span className='font-semibold'>Rs. {totalPrice2}</span></span>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1