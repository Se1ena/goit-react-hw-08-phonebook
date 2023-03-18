import { Helmet } from 'react-helmet-async';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {

  return (
    <>
      <Helmet>
        <title>Welcome to Phonebook</title>
      </Helmet>

      <Flex align="center" justify="center" h="100%" p={3}>
        <Box maxW="32rem" m="20px auto">
          <Heading mb={4}>Welcome to the phone book!👋</Heading>
          <Text fontSize="xl">Come on! Hurry up and add a new phone number!✍</Text>
        </Box>
      </Flex>
    </>
  );
}


//import { Container, Title, Text } from './Home.styled';

//export default function Home() {
  //return (
    //<Container>
      //<Title>
        //Welcome to the phone book!👋
      //</Title>
      //<Text>Come on! Hurry up and add a new phone number!✍</Text>
    //</Container>
  //);
//}
