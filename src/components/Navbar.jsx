import {Flex, Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {logOut} from "./../Redux/Login/action"

export const Navbar = () => {
       const dispatch = useDispatch();
       const {auth , loginUser} = useSelector((state) => state.loginUser)
      return(
        <Flex className = "flex"  
              height = "60px" 
              align = "center"
              bg = "teal"
              justify = "space-around"
              color = "white"
              fontSize = "20px"
              >
              <Box>
                     <Link to = "/">Home</Link>
              </Box>
              <Box>
                     <Link to = "/register">{auth?(`Token Id : ${loginUser.token}`):("Register")}</Link>
              </Box>
              <Box>
                     <Link to = "/login" onClick = {() => dispatch(logOut())}>{auth?("LogOut"):("Login")}</Link>
              </Box>
      </Flex>
      )
}