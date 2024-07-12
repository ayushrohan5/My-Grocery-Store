import Image from 'next/image'
import logo from '../navbar/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import visa from '../footer/visa.jpeg'
import paypal from '../footer/paypal.jpeg'
import skill from '../footer/skill.jpg'
import mast from '../footer/th.jpeg'
import Link from 'next/link';

function Footer() {
  return (
    <div className="pl-[190px] pr-[190px] bg-slate-200 pt-10 sm:absolute sm:top-[934%] sm:pl-[0] sm:pr-[125px] sm:pb-[15px] ">
      <div  className='flex justify-between gap-5 border-b-2  border-gray-300 sm:flex sm:flex-wrap pb-10'>
        <div className='  pt-5'>
      <Image src={logo} width={100} height={100}/>
      <div className='flex flex-col gap-2 mt-4'>
        <span className='text-gray-800 text-sm'>Address: 60-49 Road 11378 New York</span>
        <span className='text-gray-800 text-sm'>Phone: +65 11.188.888</span>
        <span className='text-gray-800 text-sm'>Email: hello@colorlib.com</span>
      </div>
      </div>

     
        <div className='pt-5  '>
            
            <h1 className='font-bold mb-5'>Useful Links</h1>
            <div className='flex gap-[70px]'>
            <ul >
                             <Link href='/shop/AllLink'>  <li className='text-sm mb-2 text-gray-500'>About Us </li></Link> 
                             <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>About Our Shop</li></Link>
                             <Link href='/shop/AllLink'>  <li className='text-sm mb-2 text-gray-500'>About Our Shop</li></Link> 
                             <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>About Our Shop</li></Link>
                             <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>Secure Shopping</li></Link>
                             <Link href='/shop/AllLink'>    <li className='text-sm mb-2 text-gray-500'>Delivery Information</li></Link>
                             <Link href='/shop/AllLink'>  <li className='text-sm mb-2 text-gray-500'>Privacy Policy</li></Link>
                             <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>Our Sitemap</li></Link>
                            </ul>

                            <ul className=''>
                            <Link href='/shop/AllLink'>    <li className='text-sm mb-2 text-gray-500'>Who We Are </li></Link>
                            <Link href='/shop/AllLink'>     <li className='text-sm mb-2 text-gray-500'>Our Service</li></Link>
                            <Link href='/shop/AllLink'>    <li className='text-sm mb-2 text-gray-500'>Project</li></Link>
                            <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>Contact</li></Link>
                            <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>Innovation</li></Link>
                            <Link href='/shop/AllLink'>   <li className='text-sm mb-2 text-gray-500'>Testimonials</li></Link>
                            </ul>

            </div>
     

      </div>

      <div className='pt-5 flex flex-col'>
        <span className=' flex font-semibold mb-5'>Join Our Newsletter Now</span>
        <span className='mb-2 text-gray-500 text-sm'>Get E-mail updates about our latest shop and special offers.</span>
        <div className='mt-5'>
        <input type='Email' placeholder='Enter Your Email' className='placeholder-gray-900 pl-5 pt-2 pb-2 w-[250px]'></input> 
        <button class="bg-[#84cc16]  text-white font-bold py-2 px-4 sm:absolute sm:left-[61%] sm:bottom-[22%]">
  SUBSCRIBE
</button>
</div>
    <div className='flex mt-8 gap-5 '>
    <CiFacebook  className='text-[35px]'/>
    <FaInstagram className='text-[35px]' />
    <FaTwitter className='text-[35px]'/>
    <FaPinterestP className='text-[35px]'/>
    </div>
      </div>
      </div>

    <div className='pt-5 pb-8 flex justify-between'>
      <div className=' flex divide-x-2 divide-gray-300 gap-2 text-gray-500 text-sm'>
        <span>Copyright ©2024 All rights reserved </span>
        <div className='flex gap-1 pl-2 text-gray-500 '><span  >This template is made with </span><FaHeart  className='text-[18px] pt-1'/> <span>by</span><span className='text-[#007BFF] hover:text-white'>Colrolib</span></div>
      </div>

      <div className='gap-5 flex sm:absolute sm:top-[97%]'>
        <Image src={mast} width={35} height={5}/>
        <Image src={visa} width={35} height={5}/>
        <Image src={paypal} width={35} height={5}/>
        <Image src={mast} width={35} height={5}/>
        <Image src={skill} width={35} height={5}/>
      </div>
    </div>
    </div>
  )
}

export default Footer
