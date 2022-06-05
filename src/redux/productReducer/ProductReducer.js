import { ACTION_TYPE } from "../types/ActionTypes";

const initialState = {
    products : [],
    cartData : [],
}


//reducer is the one which update the store.
export const productReducer  = (state = initialState , action)=>{
    // console.log(action)

    switch (action.type){
        case ACTION_TYPE.ADD_TO_CART:
        return {...state, cartData:[...state.cartData,action.payload] }   
        break;

        default :
        return state;
    }
}