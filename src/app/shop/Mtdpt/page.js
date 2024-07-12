'use client'


import Image from 'next/image'
import man from '../../../../public/feature-1.jpg'
import { Provider } from 'react-redux'
import Navbar1 from '@/app/components/Navbar/Navbar'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/footer/Footer'
import { Store1Context } from '@/app/store/Contexts'
import store from '@/app/store/Store'


function page() {
  return (
    <Provider store={store} context={Store1Context}>
        <Header />
        <Navbar1 />
       
    <div>
<div className='pr-[200px] pl-[200px] mb-10 mt-10 relative'>
<div className='mt-10'>
             <div className='flex sm:flex-wrap justify-between gap-[20px]'>
                <div className='sm:absolute sm:right-[17%] '  id ='1'>
                <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
                <span className='flex justify-center mt-3'>Crab Pool Security</span>
                <span className='flex justify-center mt-4 font-bold'>$30.00</span>
               
                </div>
                <div className='sm:absolute sm:right-[17%] sm:top-[392%]'  id='2'>
                <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
                <span className='flex justify-center mt-3'>Crab Pool Security</span>
                <span className='flex justify-center mt-4 font-bold'>$30.00</span>
              
                </div>
                <div className='sm:absolute sm:top-[547%] sm:right-[17%]' id='3'>
                <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
                <span className='flex justify-center mt-3'>Crab Pool Security</span>
                <span className='flex justify-center mt-4 font-bold'>$30.00</span>
           
                </div>
                <div className='sm:absolute sm:right-[17%] sm:top-[237%]' id='4'>
                <Image src={man}  width={250} height={200} className='sm:max-w-[255px]' />
                <span className='flex justify-center mt-3'>Crab Pool Security</span>
               <span className=' mt-4 flex justify-center font-bold'>$30.00</span>
               
                </div>
            </div> 
            </div></div>

    </div>
    <Footer />
    </Provider>
  )
}

export default page