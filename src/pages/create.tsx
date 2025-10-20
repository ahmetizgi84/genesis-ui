import {
  Flex,
  Box,
  Stack,
  Heading,
  useColorModeValue,
  Divider,
  Text,
  Container,
  Button,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input
  // FormErrorMessage
} from '@chakra-ui/react';
import { CheckCircleFill } from 'react-bootstrap-icons';
import { useCallback } from 'react';
import { useData } from '../context/DataContext';
import { EVENT_GROUP_NAME, IRawData } from '../types';
import { AnimationWrapper } from '../components';

const Create = () => {
  const {
    events: { getDataFromSocket },
    loading
  } = useData();

  return (
    <Flex minH={'calc(100vh - 215px)'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW="1280px">
        <Stack spacing={8} py={12} px={0} w="full">
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={4} minH="xl">
            <Flex gap={6} minH="xl">
              <Stack flex={0.3}>
                <Stack align={'center'}>
                  <Heading fontSize={'md'}>Configuration Summary</Heading>
                </Stack>

                <Stack py={2}>
                  <Divider />
                </Stack>

                <Summary />
              </Stack>

              <Stack>
                <Divider orientation="vertical" />
              </Stack>

              <Stack flex={0.7}>
                <Card />
              </Stack>
              <Flex alignItems="flex-end">
                <Button isLoading={loading} disabled={loading} onClick={getDataFromSocket}>
                  Send Hello There
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Create;

function Card() {
  const { rawData } = useData();
  const drawParsedContent = useCallback(() => {
    if (rawData.length > 0) {
      const groupName = rawData[0].event.groupName;
      switch (groupName) {
        case EVENT_GROUP_NAME.Login:
          return <DataCard rawData={rawData} />;
        case EVENT_GROUP_NAME.CheckDependency:
          return <ListCard rawData={rawData} />;
        case EVENT_GROUP_NAME.TemplateType:
          return 'TemplateType';
        case EVENT_GROUP_NAME.ApplicationName:
          return 'ApplicationName';
        case EVENT_GROUP_NAME.Microservice1:
          return 'Microservice1';
        case EVENT_GROUP_NAME.DB:
          return 'DB';
        case EVENT_GROUP_NAME.UseExistingGenesisDb:
          return 'UseExistingGenesisDb';
        case EVENT_GROUP_NAME.IdentityPort:
          return 'IdentityPort';
        case EVENT_GROUP_NAME.AdminPort:
          return 'AdminPort';
        case EVENT_GROUP_NAME.UIChoice:
          return 'UIChoice';
        case EVENT_GROUP_NAME.Summary:
          return <ListCard rawData={rawData} />;
        case EVENT_GROUP_NAME.Configuration:
          return 'Configuration';
        default:
          return null;
      }
    }
    return null;
  }, [rawData]);

  return (
    <AnimationWrapper>
      <Box rounded={'md'} bg={useColorModeValue('#fafafa', 'gray.800')} p={4} fontSize="sm">
        {drawParsedContent()}
      </Box>
    </AnimationWrapper>
  );
}

function ListCard({ rawData }: { rawData: IRawData[] }) {
  return (
    <List spacing={3}>
      {rawData.map((deplist: IRawData) => (
        <ListItem key={deplist.uId}>
          <ListIcon as={CheckCircleFill} color="green.500" />
          {deplist.message}
        </ListItem>
      ))}
    </List>
  );
}

function DataCard({ rawData }: { rawData: IRawData[] }) {
  const {
    events: { handleChange }
  } = useData();
  return (
    <>
      {/* <pre>{JSON.stringify(rawData, null, 2)}</pre> */}
      <Stack spacing={8}>
        <Stack spacing={4}>
          {rawData?.map(data => (
            <FormControl key={data.uId} id={data.uId}>
              <FormLabel>{data.message}</FormLabel>
              <Input
                type={data.event.eventName ?? 'text'}
                value={data.defaultValue ?? undefined}
                name={data.action.state?.type}
                onChange={handleChange}
              />
            </FormControl>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

function Summary() {
  const { summary } = useData();
  return (
    <Stack spacing={1} fontSize="xs">
      {summary?.map(s => (
        <div key={s.event}>
          <Text color="gray.500">{s.title}</Text>
          <Text>{s.selectedContent}</Text>
        </div>
      ))}

      {/* <Text color="gray.500">1. Check Dependency</Text>
      <Text>Dependency check</Text>
      <Text color="gray.500">2. Template Type</Text>
      <Text>Single Microservice (Monolithic)</Text>
      <Text color="gray.500">3. Application Name</Text>
      <Text>My Awesome Application</Text>
      <Text color="gray.500">4. Microservice Name / Microservice Port</Text>
      <Text>TestMicroService / 8081</Text>
      <Text color="gray.500">5. Database</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text>
      <Text color="gray.500">6. Tables</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text> */}
      {/*  */}
      {/* <Text color="gray.500">1. Check Dependency</Text>
      <Text>Dependency check</Text>
      <Text color="gray.500">2. Template Type</Text>
      <Text>Single Microservice (Monolithic)</Text>
      <Text color="gray.500">3. Application Name</Text>
      <Text>My Awesome Application</Text>
      <Text color="gray.500">4. Microservice Name / Microservice Port</Text>
      <Text>TestMicroService / 8081</Text>
      <Text color="gray.500">5. Database</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text>
      <Text color="gray.500">6. Tables</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text>
      <Text color="gray.500">1. Check Dependency</Text>
      <Text>Dependency check</Text>
      <Text color="gray.500">2. Template Type</Text>
      <Text>Single Microservice (Monolithic)</Text>
      <Text color="gray.500">3. Application Name</Text>
      <Text>My Awesome Application</Text>
      <Text color="gray.500">4. Microservice Name / Microservice Port</Text>
      <Text>TestMicroService / 8081</Text>
      <Text color="gray.500">5. Database</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text>
      <Text color="gray.500">6. Tables</Text>
      <Text>PostgreSQL / Use communication builder / Connections string test case lorem ipsum</Text> */}
    </Stack>
  );
}
