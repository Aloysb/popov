import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Center, Text } from '@chakra-ui/react';

const LeadFormSaveButton = ({
  onClick,
  isLoading,
}: LeadFormSaveButtonProps): JSX.Element => (
  <Center pt="8">
    <Button size="lg" bg="orange.600" onClick={() => onClick()}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <Text>Enregister</Text>
          <DownloadIcon />
        </>
      )}
    </Button>
  </Center>
);

export default LeadFormSaveButton;

type LeadFormSaveButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};
