import { DefaultLayout } from "@/layouts";
import {
			 Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,} from "@chakra-ui/react";
//import {getData} from "../utils"
const Team = async() => {
	//const user = await getData("https://api.github.com/users/virgel1995")
  return (
    <DefaultLayout title="Team">
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://avatars.githubusercontent.com/u/72863390?v=4'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
					
          <Avatar
            size={'xl'}
            src={
              'https://avatars.githubusercontent.com/u/72863390?v=4'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>user.followers.lentgh</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

        </Box>
      </Box>
    </Center>
    </DefaultLayout>
  );
};


export default Team;
