'use client'
import Image from 'next/image'
import Slider from "react-slick";
import aloo from '../../../../public/feature-5.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={` ${className} top-[4%] right-[34%] absolute nextiarrow `}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={` ${className} top-[4%] left-[53%] absolute previarrow`}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

function ThreeSlider() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
     
    <div className='flex pl-[204px] pt-[42px] pb-[60px] sm:flex-wrap sm:pl-[0] sm:absolute sm:top-[482%]' >
   
    <div className="slider-container pl-[18px] w-[399px]">
      <Slider {...settings}>
        <div>
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>

        </div>
        <div >
        
        <div  >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    
    <div className="slider-container  pl-[18px] w-[381px]">
      <Slider {...settings}>
        <div>
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>

        </div>
        <div >
        
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    
    <div className="slider-container  pl-[18px] w-[380px]">
      <Slider {...settings}>
        <div>
        <div className='' >
            <h1 className='text-2xl'>Latest Products</h1>
        </div>
          <div className='mt-[60px] flex'>
            <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>

        </div>
        <div >
        <div className='' >
            <h1 className='text-2xl '>Latest Products</h1>
        </div>

          <div className='mt-[60px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div >
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          <div className='mt-[9px] flex'>
          <Image src={aloo} width={120} height={70} />
          <div className='pl-[15px] pt-[15px]'>  <span>Cab Pool Security</span>
            <p className='pt-[3px]'>$30.00</p> </div>
          </div>
          
        
        </div>
        
      </Slider>
    </div>


    </div>
    </>
  );
}

export default ThreeSlider;
