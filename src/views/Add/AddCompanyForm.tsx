import { ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const AddCompanyForm = (): JSX.Element => (
  <Flex flexDirection="column" h="full">
    <Box
      flex="1"
      bg="gray.300"
      borderRadius="8"
      overflow="hidden"
      minH="300px"
      minW="300px"
      bgColor="gray.900"
      position="relative"
    >
      <Flex
        w="100%"
        h="100%"
        position="absolute"
        border="none"
        overflow="hidden"
        justify="center"
        alignItems="center"
        flexDir="column"
        padding="16"
      >
        <Text
          color="gray.600"
          fontSize="xl"
          textTransform="uppercase"
          textAlign="center"
        >
          Erreur affichage de la carte
        </Text>
        <ViewIcon h="16" w="16" color="gray.800" />
      </Flex>
      <Image
        w="100%"
        h="100%"
        // eslint-disable-next-line max-len
        src="http://daveyandassociates.com/wp-content/uploads/2016/09/map-placeholder.jpg"
        objectFit="cover"
      />
    </Box>
    <Container flex="1">
      <Heading py="2">Information</Heading>
      <Stack spacing="4">
        <FormControl>
          <FormLabel
            textTransform="uppercase"
            color="whiteAlpha.700"
            letterSpacing="widest"
            fontSize="small"
          >
            Nom
          </FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel
            textTransform="uppercase"
            color="whiteAlpha.700"
            letterSpacing="widest"
            fontSize="small"
          >
            Adresse
          </FormLabel>
          <Input type="text" />
        </FormControl>
        <Button>Save</Button>
      </Stack>
    </Container>
  </Flex>
);

export default AddCompanyForm;
