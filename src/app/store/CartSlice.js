'use client'
const {createSlice} = require('@reduxjs/toolkit');


const initialState = {
   
   
    
cart1:[],
    totalPrice: 0,
  };

const cartSlice =createSlice({

    

name: 'cart',
initialState,
reducers:{
    add(state, action){
       return{
          ...state,
          cart1: [...state.cart1, action.payload]}
        },
    remove(state, action){
      state.cart1 = state.cart1.filter((item) => item.id !== action.payload);
    },
    getCartTotal: (state) => {
        let { totalPrice } = state.cart1.reduce(
           
                
        
          (cartTotal, cartItem) => {
            console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            const { price } = cartItem;
            console.log(price);
            const itemTotal = price;
            cartTotal.totalPrice += itemTotal;
           
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        
      },
    
},

});
export const {add, remove, getCartTotal} = cartSlice.actions;
export default cartSlice.reducer;