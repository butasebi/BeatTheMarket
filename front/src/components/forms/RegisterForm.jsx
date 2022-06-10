import React from 'react';
import { Box, Heading, Text, HStack, VStack, FormControl, FormLabel, Input, Checkbox, Button } from '@chakra-ui/react';

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
          <Heading>Register</Heading>
          <Text fontSize='md' >Create your account. It's free and only takes a minute.</Text>
        </VStack>
        <VStack spacing={4}>
          <HStack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input variant='filled'></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input variant='filled'></Input>
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input variant='filled'></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input variant='filled' type='password'></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input variant='filled' type='password'></Input>
          </FormControl>
        </VStack>
        <HStack w='full' justify='space-between'>
          <Checkbox>
            <Text fontSize='sm'>I accept the Terms of Use & Privacy Policy</Text>
            </Checkbox>
        </HStack>
        <Button>Create Account</Button>
      </VStack>
    </Box>
  );
}