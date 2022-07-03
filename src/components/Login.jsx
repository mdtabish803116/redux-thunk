import React from "react";
import { Input , Button , Center} from '@chakra-ui/react';
import {useDispatch , useSelector} from "react-redux";
import { Spinner} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import {getLogin} from "./../Redux/Login/action"

import {
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogContent,
     AlertDialogOverlay,
     useDisclosure 
   } from '@chakra-ui/react'



export const Login = () =>{
     const { isOpen, onOpen, onClose } = useDisclosure();
     const cancelRef = React.useRef();


     const [password , setPassword] = React.useState('');
     const [userName , setUserName] = React.useState('');
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const {loading , error , loginUser} = useSelector((state) => state.loginUser)

     const payload = {
           password : password,
           username : userName
     }

     const handleSubmit = (e) => {
          e.preventDefault()
         if(password !== "" && userName !== ""){  
          onOpen()
          dispatch(getLogin(payload))
         }
    }

    const handleClose = () => {
     if(loginUser.token){
             onClose();
             navigate("/")
     }else{
           onClose()
     }
}

    
     
     if(loading){
          return(
                <Center mt = "250px">
                        <Spinner thickness='10px'
                                 speed='1.5s'
                                 emptyColor='green.200'
                                 color='blue.500'
                                 size='xl'/>
                </Center>
                
          )
    }
    
//     if(error){
//           return(
//                 <h1 style = {{
//                     textAlign : "center" ,
//                     marginTop : "200px",
//                     color : "red",
//                     fontSize : "30px"
//                 }}
                   
//                 >Something Went Wrong...</h1>
//           )
//     }
        
     
     return(
          <>
          <form style = {{
               width : "50%",
               margin :"auto",
               marginTop : "50px"
          }}>
                  <Input mt = "20px" variant = "outline" type = "text" value = {userName} onChange = {(e) => setUserName(e.target.value)} placeholder = "Enter UserName" border = "2px solid black"/> 
                 <Input mt = "20px" variant = "outline" type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder = "Enter Password" border = "2px solid black"/> 
                  <Center>
                    <Button type = "submit" mt = "20px" onClick = {handleSubmit}>LOGIN</Button>
                  </Center>
                  <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        mt = "300px"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
                   {
                        loginUser.token?("You have Succesfully Loged in"):("Invalid Login Credentials")
                   }
              
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='red' onClick={handleClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
          </form>
       </>
    )
 
}
     
