'use client'
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/Header/Header';
import Navbar1 from '@/app/components/Navbar/Navbar';
import { Store1Context } from '@/app/store/Contexts';
import store from '@/app/store/Store';

import { Provider } from 'react-redux';


const AllLink = () => {


  return (
    <Provider store={store} context={Store1Context}>
        <Header />
        <Navbar1 />
        <div className='justify-center flex'>
   <h1>Heading</h1></div><div className='justify-center flex flex-wrap ml-[200px] pr-[200px]'>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </div>
    <Footer />
    </Provider>
    
  );
};

export default AllLink;