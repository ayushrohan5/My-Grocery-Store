'use client'
import Image from "next/image";
import ban from "../Blog/Blogs.png";
import Footer from "@/app/components/footer/Footer";
import { Provider } from "react-redux";


import blog1 from "../Blog/blog-1.jpg";
import blog2 from "../Blog/blog-2.jpg";
import blog3 from "../Blog/blog-3.jpg";
import { SlCalender } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "@/app/components/Header/Header";
import Navbar1 from "@/app/components/Navbar/Navbar";
import { Store1Context } from "@/app/store/Contexts";
import store from "@/app/store/Store";


function page() {
  return (
    <>
    <Provider store={store} context={Store1Context}>
      <Header />
      <Navbar1 />
      <Image src={ban} alt="" />
      <div className="px-[200px] flex py-10">
        <div className="col-lg-4  mt-[150px]">
          <div className=" relative  w-[350px] border-solid  border-gray-900 rounded-2xl ">
            <CiSearch className=" w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" />
            <input
              type="Search"
              placeholder="Search"
              className="placeholder-gray-500 pl-5 py-2 w-[350px] border-solid  border-gray-900 rounded-2xl "
            />
          </div>
          <div>
            {/* <label className="relative border-solid  border-gray-200 rounded-2xl ">
                <CiSearch className=" w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" />

                <input
                  type="Search"
                  placeholder="Search "
                  className=" placeholder-gray-500 pl-5 py-2 w-[350px] border-solid  border-gray-200 rounded-2xl "
                />
              </label> */}

            <h4 className="font-bold my-10">Categories</h4>
            <div className="  gap-3 flex flex-col">
              <a className="text-gray-500  no-underline" href="/">
                All
              </a>
              <a className="text-gray-500 no-underline" href="/">
                Beauty(20)
              </a>
              <a className="text-gray-500 no-underline" href="/">
                Food(5)
              </a>
              <a className="text-gray-500 no-underline" href="/">
                Life Style (9)
              </a>
              <a className="text-gray-500 no-underline" href="/">
                Travel (10)
              </a>
            </div>
          </div>
          <div className="pr-[40px]">
            <h4 className="font-bold my-10">Recent News</h4>
            <div className="flex">
              <Image src={blog1} width={90} className="mb-5" />
              <div className="flex flex-col ml-3">
                <h6 className="font-bold ">
                  09 Kinds Of Vegetables Protect The Liver
                </h6>
                <span className="text-sm text-gray-500">Mar 05,2019</span>
              </div>
            </div>

            <div className="flex">
              <Image src={blog1} width={90} className="mb-5" />
              <div className="flex flex-col ml-3">
                <h6 className="font-bold ">
                  09 Kinds Of Vegetables Protect The Liver
                </h6>
                <span className="text-sm text-gray-500">Mar 05,2019</span>
              </div>
            </div>

            <div className="flex">
              <Image src={blog1} width={90} className="mb-5" />
              <div className="flex flex-col ml-3">
                <h6 className="font-bold ">
                  09 Kinds Of Vegetables Protect The Liver
                </h6>
                <span className="text-sm text-gray-500">Mar 05,2019</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-10">Search By</h4>
            <div>
              <div>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2">
                  Apple
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2 ">
                  Beauty
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300">
                  Vegetables
                </span>
              </div>
              <div className="mt-4">
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2">
                  Fruits
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300 mr-2 ">
                  Healthy Food
                </span>
                <span className="px-4 py-2 text-gray-500 bg-gray-300">
                  Lifestyle
                </span>
              </div>
            </div>
          </div>
        </div>

           <div className="col-lg-8 ">
            <div className="grid grid-cols-2 gap-2 mt-[30px] border-b-2  border-gray-500">
            <div className="my-6">
          <Image src={blog1} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>
        
              <div className="my-6">
          <Image src={blog2} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>

              <div className="my-6">
          <Image src={blog3} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>

              <div className="my-6">
          <Image src={blog1} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>
        
              <div className="my-6">
          <Image src={blog2} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>

              <div className="my-6">
          <Image src={blog3} width={350} alt="" className="mb-3" />
              <div className="flex gap-10">
                <span className="flex text-gray-500">
                  <SlCalender />
                  May 4,2019
                </span>
                <span className="flex text-gray-500">
                  <BiMessageRounded className="mt-1" />5
                </span>
              </div>
              <p className="font-semibold text-xl mt-2">
                Cooking tips make cooking simple
              </p>
              <p className="mt-2 text-gray-500">
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
               
               <div className="flex justify-center ">
              <button className="px-8 py-2 border-2 flex  rounded-3xl">Read Me < IoIosArrowRoundForward  className="ml-5 mt-1"/></button>
              </div> 
              </div>
              
              

             
              </div>

              <div className="flex gap-3 mt-5">
                <a href="/Badmass/Blogs" className="border-2 no-underline text-gray-300 px-2 py-1 hover:bg-[#84cc16]">1</a>
                <a href="/Badmass/Blogs" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">2</a>
                <a href="/Badmass/Blogs" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">3</a>
                
                <a href="/Badmass/Blogs" className="border-2 no-underline text-gray-300  px-2 py-1 hover:bg-[#84cc16]">4</a>
                <a href="/Badmass/Blogs" className="border-2 no-underline text-gray-300  px-2 py-2 hover:bg-[#84cc16]"><IoIosArrowRoundForward/></a>
                
              </div>
           </div>
      </div>
      <Footer />
      </Provider>
    </>
  );
}

export default page;
