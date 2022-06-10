import React from 'react';
import { Box, Heading, Text, HStack, VStack, FormControl, FormLabel, Input, Checkbox, Button } from '@chakra-ui/react';

// TODO lighter font for text and checkbox
export default function RegisterForm() {
  return (
    <Box
      w={['full', 'md']}
      p = {[8, 10]}
      mt={[20, '10vh']}
      mx='auto'
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={10}
    >
      <VStack spacing={8} align='center' w='full'>
        <VStack spacing={4} align={['flex-start', 'center']} w='full'>
          <Heading>Login</Heading>
          <Text fontSize='md' >Enter your email and password to login.</Text>
        </VStack>
        <VStack spacing={4} w='full'>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input variant='filled'></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input variant='filled' type='password'></Input>
          </FormControl>
        </VStack>
        <HStack w='full' justify='space-between'>
          <Checkbox>
            <Text fontSize='sm'>Remember me</Text>
          </Checkbox>
          <Button variant='link' colorscheme='blue'>
            <Text fontSize='sm'>Forgot Password?</Text>
          </Button>
        </HStack>
        <Button borderRadius={10}>Login</Button>
      </VStack>
    </Box>
  );
}