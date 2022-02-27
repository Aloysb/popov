import { Center, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const AddLeadSaveButton = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => (
  <Center pt="8">
    <Button size="lg" bg="orange.600" onClick={onClick}>
      Enregister
      <DownloadIcon />
    </Button>
  </Center>
);

export default AddLeadSaveButton;
