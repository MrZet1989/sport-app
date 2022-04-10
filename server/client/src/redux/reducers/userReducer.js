import { initState } from "../initState";
import { LOGOUT, SIGN } from "../types";
 
 export const userReducer = (state = initState, action) => {

    switch (action.type) {
        case SIGN:
           return action.payload; 

        case LOGOUT:
            return null;
    
        default:
         return state
    }
}