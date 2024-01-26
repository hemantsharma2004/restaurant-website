import { createSlice } from "@reduxjs/toolkit";

const CartSLice=createSlice({
      name:"cart",
      initialState:{
         items:[],
      },
      reducers:{
         addCart:(state, action)=>{
             state.items.push(action.payload);
         },
         removeCart:(state)=>{
             state.items.pop();
         },
         clearCart:(state)=>{ 
             state.items.length= 0;
         },
      },
});

 export default CartSLice.reducer;
 export const {addCart, removeCart , clearCart}=CartSLice.actions;
