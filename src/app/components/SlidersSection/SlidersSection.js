"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import new_collections from '../../../../public/new_collections'
import Image from 'next/image';



export default function SlidersSection() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` ${className} sm:right-[-16%] right-[0%] rightarroww`}
        style={{ ...style, display: "block",  background: "#ccc",textColor:"black", border:"2px solid",padding:"20px 2px", width:"30px", height:"60px", marginRight:"25px",  }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` ${className} sm:left-[-2%] left-[-3%] prevarroww`}
        style={{ ...style, display: "block", background: "#ccc",textColor:"black", border:"2px solid",padding:"20px 2px", width:"30px", height:"60px", marginRight:"25px" }}
        onClick={onClick}
        
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="justify-center items-center w-[90%] mt-16 ml-[7%]">
    <Slider {...settings}>
      
      {
        new_collections.map((item)=>{
          return(
            <div key={item.id} className="flex relative sm:ml-[45px]">
              <Image src={item.image} className="aspect-auto"/>
              <div className=" flex absolute bg-white text-black justify-center items-center mt-[-45px] mx-[60px] px-6 py-2 font-semibold">{item.name}</div>

            </div>
          )
        })
      }
    </Slider>
    </div>
  );
}