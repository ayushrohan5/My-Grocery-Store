"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import new_collections from '../../../../../public/new_collections'
import Image from 'next/image';
import { Provider } from "react-redux";
import store from "@/app/store/Store";



export default function Sliders() {
  
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
       
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 6
        }
      
      }
    ],
    
  
  };
  return (
    <div >
      <Provider store={store}>
    <div className="justify-center items-center w-[100%] mt-20 gap-2  ml-[0%]">
    <Slider {...settings}>
      
      {
        new_collections.map((item)=>{
          return(
            <div key={item.id} className="flex  relative gap-5">
              <Image src={item.image} className="aspect-auto "/>
              {/* <div className=" flex absolute bg-white text-black justify-center items-center mt-[-40px] mx-[52px] px-5 font-semibold">{item.name}</div> */}

            </div>
          )
        })
      }
    </Slider>
    </div>
    </Provider>
    </div>
  );
}
