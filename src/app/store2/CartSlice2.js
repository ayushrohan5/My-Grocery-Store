'use client'
const {createSlice} = require('@reduxjs/toolkit');


const initialState = {
   
   
    
cart2:[],
    totalPrice: 0,
  };

const cartSlice2 =createSlice({

    

name: 'cart2',
initialState,
reducers:{
    add2(state, action){
       return{
          ...state,
          cart2: [...state.cart2, action.payload]}
        },
    remove2(state, action){
      state.cart2 = state.cart2.filter((item) => item.id !== action.payload);
    },
    getCartTotal2: (state) => {
        let { totalPrice } = state.cart2.reduce(
           
                
        
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
export const {add2, remove2, getCartTotal2} = cartSlice2.actions;
export default cartSlice2.reducer;