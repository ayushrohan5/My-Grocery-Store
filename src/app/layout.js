"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";

import store2 from "./store2/Store2";
import { Store2Context } from "./store2/Contexts";
import { Store1Context } from "./store/Contexts";

import store from "./store/Store";




const inter = Inter({ subsets: ["latin"] });


 
export default function RootLayout({ children }) {
  return (
    <Provider store={store} context={Store1Context}>
     <Provider store={store2} context={Store2Context}>
     
    <html lang="en">
      <body>{children}
      
      </body>
    </html>
   
    </Provider>
    </Provider>
  );
}
