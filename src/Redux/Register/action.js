export const REGISTER_SUCCESS = "registerSuccess";
export const REGISTER_LOADING = "registerLoading";
export const REGISTER_ERROR = "registerError";

export const registerUserSuccess = (payload) => ({
     type : REGISTER_SUCCESS,
})

export const registerUserLoading = () => ({
    type : REGISTER_LOADING,
})

export const registerUserError = () => ({
    type : REGISTER_ERROR,
})

export const getRegister = (payload) => 
async(dispatch) => {
      try {  
             dispatch(registerUserLoading())
       let res  =   await fetch("https://masai-api-mocker.herokuapp.com/auth/register" , {
            method : "POST",
             mode : "no-cors",
            body : JSON.stringify(payload),
            headers : {
                  "Content-Type" : "application/json",
                  'Access-Control-Allow-Origin':'*',
            }
          });
          let data = await res.json();
         dispatch(registerUserSuccess(data));
           console.log(data)
     }catch(error){  
          dispatch(registerUserError())
     }
}