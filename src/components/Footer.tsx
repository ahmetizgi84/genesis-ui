import { Box, Text, Flex, useColorModeValue, Image, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <Image
        w={180}
        objectFit="cover"
        src={useColorModeValue('./assets/genesis_logo.png', './assets/genesis_logo_dark.png')}
        alt="dotnetcoregenesis"
      />
    </Link>
  );
};

export default function LargeWithLogoCentered() {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={isSmallerThan768 ? 'xs' : 'sm'} textAlign={'center'}>
          Copyright 2016-{new Date().getFullYear()} NetCoreGenesis. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
