'use client'
import Image from 'next/image'
import Slider from "react-slick";
import aloo from '../../../../../public/feature-2.jpg'
import { Provider } from "react-redux";
import store from '@/app/store/Store';



function ThreeSlider() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

  };
  return (
    <>
    <Provider store={store}>
    <div className='py-[50px] pl-[100px]   flex justify-center sm:pl-[50px] sm:pr-[20px]  '>
     
    <div className='flex  sm:flex-wrap   ' >
   
    <div className="slider-container pl-[18px] w-[399px] ">
      <Slider {...settings}>
        <div>
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>

        </div>
        <div >
        
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <h5>Cab Pool Security</h5>
            <h6 className='pt-[3px]'>$30.00</h6> </div>
          </div>
          
        
        </div>
        
      </Slider>
     
    </div>


    
   


    </div>
    </div>
    </Provider>
    </>
  );
}

export default ThreeSlider;
