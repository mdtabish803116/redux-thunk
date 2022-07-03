import React from "react";
import { Input , Button , Center} from '@chakra-ui/react';
import {getRegister} from "./../Redux/Register/action";
import {useDispatch , useSelector} from "react-redux";

export const Register = () =>{
    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [userName , setUserName] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [desc , setDesc] = React.useState('');
    const dispatch = useDispatch();
    const {loading , error} = useSelector((state) => state.registerUser)

     const payload = {
        name : name,
        email : email,
        password : password,
        username : userName,
        mobile : mobile,
        description : desc
     }

const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getRegister(payload))
}
    

    return(
          <form style = {{
               width : "50%",
               margin :"auto",
               marginTop : "50px"
          }}>
                 <Input mt = "20px" variant = "outline" type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter Name" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Enter Email" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder = "Enter Password" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "text" value = {userName} onChange = {(e) => setUserName(e.target.value)} placeholder = "Enter UserName" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "tel" value = {mobile} onChange = {(e) => setMobile(e.target.value)} placeholder = "Enter Mobile" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "text" value = {desc} onChange = {(e) => setDesc(e.target.value)} placeholder = "Enter Description" border = "2px solid black"/> 
                  <Center>
                    <Button type = "submit" mt = "20px" onClick = {handleSubmit}>REGISTER</Button>
                  </Center>

          </form>
    )
 
}
  
