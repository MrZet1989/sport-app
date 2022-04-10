import { LOGOUT, SIGN } from "../types";

export const sign = (user) => {
  return{
   type: SIGN,
    payload:user,   
  };  
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
}