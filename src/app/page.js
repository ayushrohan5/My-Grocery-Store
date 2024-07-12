'use client'
import Header from "./components/Header/Header";
import Navbar1 from "./components/Navbar/Navbar";
import DptSection from "./components/DptSection/DptSection";
import SlidersSection from "./components/SlidersSection/SlidersSection";
import Product from "./components/Featureproduct/page";
import Fruits from "./components/fruits/Fruits";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import ThreeSlider from "./components/ThreeSlider/ThreeSlider";
import { Provider } from "react-redux";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./SearchResultss/page";
import store2 from "./store2/Store2";

import { Store2Context } from "./store2/Contexts";
import { Store1Context } from "./store/Contexts";
import store from "./store/Store";







export default function Home() {
  return (
    <>
     <Provider store={store} context={Store1Context}>
     <Provider store={store2} context={Store2Context}>
     
    <ToastContainer theme='colored' position='top-center' />
     <Header />
      <Navbar1 />
      
      <App />
      <SlidersSection />
      <Product />
      <Fruits />
      <ThreeSlider />
      <Blogs />
      <Footer />
     </Provider> </Provider> 
     
    </>
  );
}
