import {Flex, Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";

export const Navbar = () => {
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
                     <Link to = "/register">Register</Link>
              </Box>
              <Box>
                     <Link to = "/login">Login</Link>
              </Box>
      </Flex>
      )
}