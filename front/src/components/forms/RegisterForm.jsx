import React from 'react';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
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

// TODO Terms of Use and Privacy Policy?
// TODO create account recommendation
// TODO confirmation mail


export default function RegisterForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  function validateEmail(value) {
    let error;

    if (!value) {
      error = 'Email is required.';
    } else if (!value.match(/[0-9A-Za-z._]@[0-9A-Za-z].[a-z]/g)) {
      error = 'Email is invalid.';
    }

    return error;
  }

  function validatePassword(value) {
    let error;

    if (!value) {
      error = 'Password is required.';
    } else if (!value.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/g)) {
      error = 'Password is not strong enough.';
    }

    return error;
  }

  const toast = useToast()

  return (
    <><Button
      onClick={onOpen}
      borderRadius={10}
      marginRight='1vh'
      colorScheme='brand'
    >
      Register
    </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
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
                <Heading><Text variant='brand'>Register</Text></Heading>
                <Text fontSize='md'>Create your account. It's free and only
                  takes a minute.</Text>
              </VStack>

              <Box my='3vh'>
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    agreement: false,
                  }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      fetch("https://localhost:5001/api/Authentication/sign-up",
                      {method: 'POST', headers: { 'Content-Type': 'application/json' },body: JSON.stringify({"firstName": values.firstName,"lastName": values.lastName, "email":values.email,"password":values.password , "roleId":"BasicUser"})})
                      .then((response) => {
                        console.log(response)

                        if (response.ok) {
                          actions.setSubmitting(false)
                          toast({
                            title: 'Account created',
                            description: 'We have created your account for you',
                            status: 'success',
                            duration: 3000,
                            isClosable: true
                          })
                        } else {
                          throw new Error('An unexpected error occured.')
                        }
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                      
                      onClose()
                    }, 1000);
                  }}
                >
                  {(props) => (
                    <Form align='center'>
                      <VStack spacing={4} w='full'>
                        <HStack spacing={4}>
                          <Field name='firstName'>
                            {({ field, form }) => (
                              <FormControl isRequired
                                           isInvalid={form.errors.firstName &&
                                             form.touched.firstName}>
                                <FormLabel htmlFor='firstName'>
                                  <Text display='inline' variant='brand'>First Name</Text>
                                </FormLabel>
                                <Input {...field} ref={initialRef}
                                       variant='filled' />
                                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name='lastName'>
                            {({ field, form }) => (
                              <FormControl isRequired
                                           isInvalid={form.errors.lastName &&
                                             form.touched.lastName}>
                                <FormLabel htmlFor='lastName'>
                                  <Text display='inline' variant='brand'>Last Name</Text>
                                </FormLabel>
                                <Input {...field} variant='filled' />
                                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </HStack>
                        <Field name='email' validate={validateEmail}>
                          {({ field, form }) => (
                            <FormControl isRequired
                                         isInvalid={form.errors.email &&
                                           form.touched.email}>
                              <FormLabel htmlFor='email'>
                                <Text display='inline' variant='brand'>Email Address</Text>
                              </FormLabel>
                              <Input {...field} variant='filled' />
                              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name='password' validate={validatePassword}>
                          {({ field, form }) => (
                            <FormControl isRequired
                                         isInvalid={form.errors.password &&
                                           form.touched.password}>
                              <FormLabel htmlFor='password'>
                                <Text display='inline' variant='brand'>Password</Text>
                              </FormLabel>
                              <InputGroup>
                                <Input
                                  {...field}
                                  variant='filled'
                                  type={showPassword ? 'text' : 'password'} />
                                <InputRightElement width='4.5rem'>
                                  <Button size='sm'
                                          onClick={handleClick}>
                                    {showPassword ? 'Hide' : 'Show'}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                              <FormHelperText align='justify'>Password should
                                consist of at least 8 characters,
                                including capital letters (A-Z), digits (0-9)
                                and special symbols (!@#$%^&*).</FormHelperText>
                              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </VStack>

                      <Box mt='2vh' mb='1vh' align='left'>
                        <Field name='agreement'>
                          {({ field, form }) => (
                            <FormControl isRequired
                                         isInvalid={form.errors.agreement &&
                                           form.touched.agreement}>
                              <Checkbox {...field}>
                                <Text fontSize='sm'>I accept the Terms of Use &
                                  Privacy Policy</Text>
                              </Checkbox>
                              <FormErrorMessage>{form.errors.agreement}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>

                      <Button 
                        mt='2vh'
                        borderRadius={10}
                        isLoading={props.isSubmitting}
                        type='submit'
                      >
                        Create Account
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