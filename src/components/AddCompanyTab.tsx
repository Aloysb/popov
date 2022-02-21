import {
  Container,
  Image,
  Heading,
  Box,
  Flex,
  Stack,
  FormLabel,
  Input,
  FormControl,
  Button,
} from '@chakra-ui/react';

const AddCompanyTab = (): JSX.Element => (
  <Flex flexDirection="column" h="full">
    <Box flex="1" bg="gray.300" borderRadius="8" overflow="hidden">
      <Image
        w="100%"
        h="100%"
        src="http://daveyandassociates.com/wp-content/uploads/2016/09/map-placeholder.jpg"
        objectFit="cover"
      />
    </Box>
    <Container flex="1">
      <Stack>
        <FormControl>
          <FormLabel>Company name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Address name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button>Save</Button>
      </Stack>
    </Container>
  </Flex>
);

export default AddCompanyTab;
