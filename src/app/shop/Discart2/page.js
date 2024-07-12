'use client'

import Header from '@/app/components/Header/Header'
import Navbar1 from '@/app/components/Navbar/Navbar'
import Footer from '@/app/components/footer/Footer'

import React from 'react'
import { Provider } from 'react-redux'


import store2 from '@/app/store2/Store2'
import { Store2Context } from '@/app/store2/Contexts'
import Cartpage2 from '../Cart2/page'

function page() {
  
  return (
    <Provider store ={store2} context={Store2Context} >
    <div>
    <Header />
            <Navbar1 />
            <Cartpage2 />

<Footer />


    </div>
    </Provider>
  )
}

export default page