import Image from 'next/image'
import blog1 from '../blogs/blog-1.jpg'
import blog2 from '../blogs/blog-2.jpg'
import blog3 from '../blogs/blog-3.jpg'
import { SlCalender } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";

function Blogs() {
  return (
    <div className='pr-[200px] pl-[200px] sm:pr-[0px] sm:pl-[0px] mb-10 sm:absolute sm:top-[703%] sm:right-[-5%]'>
          <div className='flex justify-center '>
            <h1 className='text-4xl font-bold sm:pb-[15px]'>From The Blog</h1>
          
          </div>

          <div className=' ml-[500px] w-[100px] h-[4px] bg-[#84cc16] mb-10  mt-3 sm:hidden'>
            
          </div>

        <div className='flex justify-between gap-10 sm:flex-wrap '>
            <div className='mb-5'><Image src={blog1}  width={500} height={500} className='sm:max-w-[393px] sm:pl-[15px] mb-5'/>
           <div className='flex gap-10 sm:pl-[10px]'> 
           <span className='flex text-gray-500 sm:pl-[10px]'><SlCalender className='sm:mr-[5px]' />May 4,2019</span>
            <span className='flex text-gray-500 sm:pl-[10px]'><BiMessageRounded  className='mt-1'/>5</span>
            </div>
            <p className='font-semibold text-xl mt-3 sm:pl-[12px]'>Cooking tips make cooking simple</p>
            <p className='mt-3 text-gray-500 sm:pl-[12px]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>

            <div className='mb-5'><Image src={blog2}  width={500} height={500} className='sm:max-w-[393px] sm:pl-[15px] mb-5'/>
           <div className='flex gap-10 sm:pl-[10px]'> 
           <span className='flex text-gray-500 sm:pl-[10px]'><SlCalender className='sm:mr-[5px]' />May 4,2019</span>
            <span className='flex text-gray-500 sm:pl-[10px]'><BiMessageRounded  className='mt-1'/>5</span>
            </div>
            <p className='font-semibold text-xl mt-3  sm:pl-[12px]'>6 ways to prepare breakfast for 30</p>
            <p className='mt-3 text-gray-500  sm:pl-[12px]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>

            <div className='mb-5'><Image src={blog3}  width={500} height={500} className='sm:max-w-[393px] sm:pl-[15px] mb-5'/>
           <div className='flex gap-10 sm:pl-[10px]'> 
           <span className='flex text-gray-500 sm:pl-[10px]'><SlCalender className='sm:mr-[5px]' />May 4,2019</span>
            <span className='flex text-gray-500 sm:pl-[10px]'><BiMessageRounded  className='mt-1'/>5</span>
            </div>
            <p className='font-semibold text-xl mt-3 sm:pl-[12px]'>Visit the clean farm in the US</p>
            <p className='mt-3 text-gray-500 sm:pl-[12px]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>
        
     
      
    </div>
    
    </div>
  )
}

export default Blogs
