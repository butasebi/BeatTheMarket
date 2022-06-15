import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  useToast
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

// TODO Forgot Password?
// TODO Remember me
export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const toast = useToast();

  return (
    <><Button
      onClick={onOpen}
      borderRadius={10}
      marginRight='1vh'
      variant='ghost'
      colorScheme='brand'
    >
      Login
    </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        blockScrollOnMount={false}
        initialFocusRef={initialRef}
        motionPreset='slideInBottom'
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box
              mx='2vh'
              my='4vh'
            >
              <VStack spacing={4} align={['flex-start', 'center']} w='full'>
                <Heading><Text variant='brand'>Login</Text></Heading>
                <Text fontSize='md'>Enter your email and password to
                  login.</Text>
              </VStack>

              <Box my='3vh'>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      fetch("https://localhost:5001/api/Authentication/login",
                      {method: 'POST', headers: { 'Content-Type': 'application/json' },body: JSON.stringify({"email":values.email,"password":values.password})})
                      .then((response) => {
                        if (response.ok) {
                          return response.json()
                        } else {
                          throw new Error('Email or password invalid')
                        }
                      })
                      .then(async (responseJson) => {
                        actions.setSubmitting(false);

                        localStorage.setItem('isLoggedIn', 'true')
                        localStorage.setItem('email', values.email)

                        let res = await fetch("https://localhost:5001/api/User/get-user?" + new URLSearchParams({email: values.email}))  
                        let userData = await res.json();

                        localStorage.setItem('id', userData.userId)
                        localStorage.setItem('userName', userData.userName.replace('_', ' '))

                        toast({
                          // TODO color?
                          title: 'Welcome, ' + localStorage.getItem('userName') + '!',
                          description: 'Login successful',
                          status: 'success',
                          duration: 3000,
                          isClosable: true
                        })

                        window.location.reload()
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                    }, 1000);
                  }}
                >
                  {(props) => (
                    <Form align='center'>
                      <VStack spacing={4} w='full'>
                        <Field name='email'>
                          {({ field, form }) => (
                            <FormControl isRequired
                                         isInvalid={form.errors.name &&
                                           form.touched.name}>
                              <FormLabel>
                                <Text display='inline' variant='brand'>Email Address</Text>
                              </FormLabel>
                              <Input {...field} ref={initialRef}
                                     variant='filled' />
                              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='password'>
                          {({ field, form }) => (
                            <FormControl isRequired
                                         isInvalid={form.errors.name &&
                                           form.touched.name}>
                              <FormLabel>
                                <Text display='inline' variant='brand'>Password</Text>
                              </FormLabel>
                              <Input {...field} variant='filled'
                                     type='password' />
                              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </VStack>

                      <Box mt='2vh' mb='1vh'>
                        <HStack w='full' justify='space-between'>
                          <Checkbox>
                            <Text fontSize='sm'>Remember me</Text>
                          </Checkbox>
                          <Button variant='link'>
                            <Text fontSize='sm'>Forgot Password?</Text>
                          </Button>
                        </HStack>
                      </Box>

                      <Button
                        mt='2vh'
                        borderRadius={10}
                        isLoading={props.isSubmitting}
                        type='submit'
                      >
                        Login
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal></>
  );
}