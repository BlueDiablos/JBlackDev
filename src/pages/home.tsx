import { Avatar, Box, Container, Heading} from "@chakra-ui/react";
import pic from '../assets/profilepic.jpg';
import Layout from '../components/layout';
import Paragraph from "../components/paragraph";
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';

const Home = () => {
   return(
   <Layout title="Home">
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joseph Blackledge 
          </Heading>
          <p> Husband / Developer / Tech Enthusiast </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
          <Avatar src={pic} size='3xl'/>
          </Box>
        </Box>
      </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <Paragraph>
                Testing
            </Paragraph>
        </Section>
        
    </Container>
        
    </Layout>
   )
}

export default Home;
