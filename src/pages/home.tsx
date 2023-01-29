import {
  Flex,
  Box,
  Stack,
  Heading,
  useColorModeValue,
  Divider,
  Text,
  useMediaQuery,
  Container
} from '@chakra-ui/react';
import { Hammer, Upload, Tools } from 'react-bootstrap-icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

export default Home;

function Card() {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={4}>
      <Stack align={'center'}>
        <Heading fontSize={isSmallerThan768 ? 'md' : 'lg'}>Select an action you want to proceed</Heading>
      </Stack>

      {/* 4 -> 1rem -> 16px */}
      <Stack py={4}>
        <Divider />
      </Stack>

      <Stack spacing={4}>
        {actions.map(action => (
          <ActionCard key={action.id.toString()} action={action} />
        ))}
      </Stack>
    </Box>
  );
}

function ActionCard({ action }: { action: IAction }) {
  return (
    <Link to={action.route}>
      <Flex
        rounded={'md'}
        align="center"
        gap={4}
        bg={useColorModeValue('white', 'gray.700')}
        p={3}
        // onClick={() => handleNavigate(action.route)}
        cursor="pointer"
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.800')
        }}>
        <Flex
          bg={action.boxIconColor}
          w={38}
          minW={38}
          h={38}
          minH={38}
          rounded="md"
          align={'center'}
          justify={'center'}>
          {action.icon}
        </Flex>

        <Stack>
          <Heading fontSize={'md'}>{action.action}</Heading>
          <Text fontSize="sm" style={{ margin: 0 }} color="gray.500">
            {action.description}
          </Text>
        </Stack>
      </Flex>
    </Link>
  );
}

interface IAction {
  id: number;
  action: string;
  description: string;
  route: string;
  boxIconColor: string;
  icon: ReactNode;
}

const actions: IAction[] = [
  {
    id: 1,
    action: 'Create',
    description: 'Custom buttons, input fields and radio buttons.',
    route: '/create',
    boxIconColor: '#8B5CF6',
    icon: <Hammer color="white" size={24} />
  },
  {
    id: 2,
    action: 'Update',
    description: 'Custom buttons, input fields and radio buttons.',
    route: '/update',
    boxIconColor: '#6366F1',
    icon: <Tools color="white" size={24} />
  },
  {
    id: 3,
    action: 'Upgrade',
    description: 'Custom buttons, input fields and radio buttons.',
    route: '/upgrade',
    boxIconColor: '#3B82F6',
    icon: <Upload color="white" size={24} />
  }
];
