import { sign } from "../userAction"


export const signIn = (signInInput, navigate) => async (dispatch) =>{


    const response = await fetch ('http://localhost:3001/user/authentification', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify(signInInput)
    })

    console.log(response);
if(response.status === 200){
    const {id, name} = await response.json()
    dispatch(sign({id, name}))
}else if (response.status === 233){
    alert('it is wrong password')
}else if (response.status === 234){
    navigate('/registr')
    
}

}