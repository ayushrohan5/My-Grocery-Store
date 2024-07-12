'use client'
import { createSelectorHook, useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";  
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { Store1Context } from "@/app/store/Contexts";



function Header() {
    const useStore1Selector = createSelectorHook(Store1Context);
    const { isAuthenticated, userData } = useStore1Selector((state) => state.auth);
    const userName = userData && userData.data ? userData.data.name : '';
    // console.log("This is header console.---",userData.data.name)
    return (
        <>
            {isAuthenticated ? (
                <div className='bg-stone-200 px-16 py-[10px] flex justify-between sm:pl-[0px] sm:pr-[0px]'>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <MdEmail /> <span className='text-xs'>hello@colorlib.com</span>
                        </div>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <span className='text-xs'>Free Shipping for all Order of $99</span>
                        </div>
                    </div>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex flex-row gap-2 pr-5 sm:flex-wrap sm:gap-1'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaLinkedinIn />
                            <FaPinterestP />
                        </div>
                        <div className='sm:flex-wrap flex'>
                            <div className='flex flex-row gap-2 pr-5 sm:gap-1 sm:px-0!important'>
                                <LiaFlagUsaSolid />
                                <span className='text-xs flex gap-2 sm:gap-1'>English <span><IoIosArrowDown className='mt-1' /></span></span>
                            </div>
                            <Link href="/">
                                <div className='flex flex-row gap-2 sm:gap-1 pr-5'>
                                    <FaUser />
                                    <span className='text-xs'>{userName}</span>
                                    <div className="pb-[5px] text-xs">
                                   <Link href='/Login' >Log out</Link> </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='bg-stone-200 px-16 py-[10px] flex justify-between sm:pl-[0px] sm:pr-[0px]'>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <MdEmail /> <span className='text-xs'>hello@colorlib.com</span>
                        </div>
                        <div className='flex gap-2 pr-5 sm:gap-1 sm:px-0!important '>
                            <span className='text-xs'>Free Shipping for all Order of $99</span>
                        </div>
                    </div>
                    <div className='flex divide-x-2 divide-gray-300'>
                        <div className='flex flex-row gap-2 pr-5 sm:flex-wrap sm:gap-1'>
                            <FaFacebookF />
                            <IoLogoTwitter />
                            <FaLinkedinIn />
                            <FaPinterestP />
                        </div>
                        <div className='sm:flex-wrap flex'>
                            <div className='flex flex-row gap-2 pr-5 sm:gap-1 sm:px-0!important'>
                                <LiaFlagUsaSolid />
                                <span className='text-xs flex gap-2 sm:gap-1'>English <span><IoIosArrowDown className='mt-1' /></span></span>
                            </div>
                            <Link href="/Login">
                                <div className='flex flex-row gap-2 sm:gap-1 pr-5'>
                                    <FaUser />
                                    <span className='text-xs'>Login</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;



















// 'use client'
// import Link from 'next/link'
// import { MdEmail } from "react-icons/md";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaPinterestP } from "react-icons/fa";
// import { LiaFlagUsaSolid } from "react-icons/lia";
// import { IoIosArrowDown } from "react-icons/io";
// import { useEffect } from 'react';
// import isLoggedin from '@/app/Login/page';
// import setToken from '@/app/Login/page';


// function Header() {
  
// function handleLgout(e){
    
     
   
//     sessionStorage.removeItem('userrole')
//     sessionStorage.removeItem('username')
 
//     }
//     useEffect(()=>{
     
//      handleLgout();
//          },[handleLgout]);
//   return (
//     <div className='bg-stone-100 pl-[180px] pr-[180px] pt-[12px] flex justify-between w-[100%] flex-wrap sm:hidden' >
      
//       <div className='flex    divide-x-2 divide-gray-300'>

//       <div className='flex gap-2 px-5  '>
//      <MdEmail  /> <span className='text-xs' >hello@colorlib.com</span>
//      </div>

//      <div className='flex gap-2  px-5   '>
//      <span className='text-xs' >Free Shipping for all Order of $99</span>
//      </div>

//      </div>

//      <div className='flex    divide-x-2 divide-gray-300'>
//       <div className='flex flex-row gap-6 px-5 '>
//       <FaFacebookF />
//       <FaTwitter />
//       <FaLinkedinIn />
//       <FaPinterestP />
//       </div>
//       <div className='flex flex-row gap-1 px-5'>
//       <LiaFlagUsaSolid />
//       <div className="dropdown dropdown-hover">
//   <div tabIndex={0} role="button" className='mb-[9px] text-[12px]'>English </div>
  
//   <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-black text-white   ">
//     <li><Link className='text-[16px] whitetext' href="">Spanis</Link></li>
//     <li><Link className='text-[16px] whitetext' href="">English </Link></li>
   
//   </ul>
// </div>
// <IoIosArrowDown className='text-[10px] mt-[5px]'/>
//       </div>
//       <div className='flex flex-row gap-2 px-5 items-center'>
//       <FaUser />

//         {
//           isLoggedin ? (
// <button  className='' onClick={handleLgout}><Link  className='text-xs' href="/Login">Logout</Link></button>
//           ):
//           (
//             <Link  className='text-xs' href="/Login">Login</Link>
//           )


//         }


      
     
      
//       </div>
//      </div>


//     </div>
//   )
// }

// export default Header