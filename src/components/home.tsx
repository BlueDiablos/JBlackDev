import { Avatar, Flex, Box, Badge, Text} from "@chakra-ui/react";
import pic from '../assets/profilepic.jpg'

export default function Home(){
   return(
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10%'}}>
            <Flex>
                <Box ml='10'>
                   <Text fontSize='2xl' fontWeight='bold'>
                   Joseph Blackledge
                   </Text>
                   <Text fontSize='md'>Husband / Software Engineer / Tech Enthusiast</Text>
                </Box>
                <Avatar size='xl' ml='10' src = {pic} />
            </Flex>
       </div>
   )
}
