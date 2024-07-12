'use client'

import Header from '@/app/components/Header/Header'
import Navbar1 from '@/app/components/Navbar/Navbar'
import Footer from '@/app/components/footer/Footer'

import React from 'react'
import { Provider } from 'react-redux'
import Cart from '../Cart/page'
import Login from '@/app/Login/page'
import { Store1Context } from '@/app/store/Contexts'
import  store  from '@/app/store/Store'

function page() {
  return (
    <Provider store={store} context={Store1Context}>
    <div>
    <Header />
            <Navbar1 />
            <Cart />

<Footer />


    </div>
    </Provider>
  )
}

export default page