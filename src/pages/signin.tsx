import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useMediaQuery,
  Divider,
  FormErrorMessage,
  Container
} from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Signin = () => {
  const { isSignedIn } = useData();

  if (isSignedIn) return <Navigate to="/" />;

  return (
    <Flex
      minH={'calc(100vh - 215px)'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW="xl">
        <Stack spacing={8} py={12} px={0} w="full">
          <Card />
        </Stack>
      </Container>
    </Flex>
  );
};

export default Signin;

interface IFormData {
  email: string;
  password: string;
}

function Card() {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const {
    events: { handleLogin },
    loading
  } = useData();
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let _formData: IFormData = { ...formData };
    const ky = e.target.name as keyof IFormData;
    _formData[ky] = e.target.value;
    setFormData(_formData);
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const isEmailError = formData.email === '';
    const isPasswordError = formData.password === '';
    if (isEmailError || isPasswordError) {
      setErrors({ ...errors, email: isEmailError, password: isPasswordError });
      return;
    }

    handleLogin(formData);
  };

  return (
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={4}>
      <Stack align={'center'}>
        <Heading fontSize={isSmallerThan768 ? 'md' : 'lg'}>Sign in</Heading>
      </Stack>

      <Stack py={4}>
        <Divider />
      </Stack>

      <form onSubmit={handleFormSubmit}>
        <Stack spacing={8}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={formData.email} name="email" onChange={handleInputChange} disabled={loading} />
              {errors.email ? <FormErrorMessage>Email is required.</FormErrorMessage> : ''}
            </FormControl>

            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={formData.password}
                name="password"
                onChange={handleInputChange}
                disabled={loading}
              />
              {errors.password ? <FormErrorMessage>Password is required.</FormErrorMessage> : ''}
            </FormControl>
          </Stack>
          <Button
            isLoading={loading}
            type="submit"
            bg={'red.500'}
            color={'white'}
            _hover={{
              bg: 'red.600'
            }}>
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
