import { AddIcon, CheckIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  TabList,
  Stack,
  Tabs,
  Box,
  Tab,
  TabPanel,
  TabPanels,
  Heading,
  Button,
  Center,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import AddCompanyTab from './AddCompanyTab';
import AddLeadCompanyTab from './AddLeadCompanyTab';
import AddLeadInput from './AddLeadInput';

const AddLeadPage = (): JSX.Element => {
  const initialState: State = {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
  };

  const formReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
      case ActionType.ChangeEmail:
        return { ...state, email: payload };
      case ActionType.ChangeFirstName:
        return { ...state, firstName: payload };
      case ActionType.ChangePhone:
        return { ...state, phone: payload };
      case ActionType.ChangeTitle:
        return { ...state, title: payload };
      case ActionType.ChangeLastName:
        return { ...state, lastName: payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { firstName, lastName, phone, title, email } = state;

  const inputsInfo: {
    label: string;
    placeholder: string;
    value: string;
    actionType: ActionType;
  }[] = [
    {
      label: 'first name',
      value: firstName,
      placeholder: 'john',
      actionType: ActionType.ChangeFirstName,
    },
    {
      label: 'last name',
      value: lastName,
      placeholder: 'doe',
      actionType: ActionType.ChangeLastName,
    },
    {
      label: 'tilte',
      value: title,
      placeholder: 'Chef',
      actionType: ActionType.ChangeTitle,
    },
    {
      label: 'phone',
      value: phone,
      placeholder: '0612315412',
      actionType: ActionType.ChangePhone,
    },
    {
      label: 'email',
      value: email,
      placeholder: 'johndoe@gmail.com',
      actionType: ActionType.ChangeEmail,
    },
  ];

  const dispatchNewValue =
    (type: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: ActionType.ChangeFirstName,
        payload: e.target.value,
      });
    };

  return (
    <Flex flexDirection="column" alignItems="stretch" flex="1" py={4}>
      <Tabs isFitted flex="1">
        <Flex flexDir="column" h="full">
          <TabList>
            <Tab>Contact</Tab>
            <Tab>Company</Tab>
          </TabList>
          <TabPanels flexGrow="1">
            <TabPanel h="full">
              <Flex flexDir="column" h="full">
                <Accordion allowMultiple flex="1">
                  <AccordionItem borderTop="0">
                    <AccordionButton
                      border="1px"
                      borderColor="gray.700"
                      borderRadius={4}
                    >
                      Details
                    </AccordionButton>
                    <AccordionPanel>
                      <Stack flex="1" spacing="4">
                        {inputsInfo.map(
                          ({ label, value, placeholder, actionType }) => (
                            <AddLeadInput
                              label={label}
                              placeholder={placeholder}
                              value={value}
                              onChange={dispatchNewValue(actionType)}
                            />
                          )
                        )}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem borderTop="0" borderBottom="0">
                    <AccordionButton
                      border="1px"
                      borderColor="gray.700"
                      borderRadius={4}
                    >
                      Company
                    </AccordionButton>

                    <AccordionPanel>
                      <AddLeadCompanyTab />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Center>
                  <Button>Save</Button>
                </Center>
              </Flex>
            </TabPanel>
            <TabPanel h="full">
              <AddCompanyTab />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Flex>
  );
};

export default AddLeadPage;

type State = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
};

type Action = {
  type: ActionType;
  payload: string;
};

export enum ActionType {
  ChangeFirstName = 'CHANGE_FIRST_NAME',
  ChangeLastName = 'CHANGE_LAST_NAME',
  ChangeTitle = 'CHANGE_TITLE',
  ChangeEmail = 'CHANGE_EMAIL',
  ChangePhone = 'CHANGE_PHONE',
}
