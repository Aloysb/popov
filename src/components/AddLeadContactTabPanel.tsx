import { useReducer } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import AddLeadCompanyTab from './AddLeadCompanyTab';
import AddLeadSaveButton from './AddLeadSaveButton';
import AddLeadContactInformationSection from './AddLeadContactInformationSection';
import 'axios';
import axios from 'axios';

const AddLeadContactTabPanel = (): JSX.Element => {
  const initialState: State = {
    data: {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phoneNumber: '',
      companyId: '',
      note: '',
    },
    error: null,
  };

  /// Return the error or null
  const isValidState = (state: State): null | string => {
    const error = Object.entries(state.data).find(([_, value]) => value === '');
    return error ? error[1] : null;
  };

  /// Save contact
  const saveContact = async (state: State): Promise<boolean> => {
    const maybeError = isValidState(state);

    if (maybeError) {
      reportError(maybeError);
      return false;
    }

    console.log(state.data);
    const body = Object.fromEntries(
      Object.entries(state.data).filter(([_, value]) => value !== '')
    );

    //! Note should be optional...
    const res = await axios.post('http://127.0.0.1:8080/lead', {
      ...body,
      note: 'Hello',
    });
    //  body);

    console.log(res);

    return true;
  };

  const reportError = (errorMessage: string): void => {
    toast({
      title: "Impossible d'enregister le contact",
      description: errorMessage,
      status: 'error',
    });
  };

  const toast = useToast({ position: 'top-right', variant: 'solid' });

  const formReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
      case ActionType.ChangeEmail:
        return { ...state, data: { ...state.data, email: payload } };
      case ActionType.ChangeFirstName:
        return { ...state, data: { ...state.data, firstName: payload } };
      case ActionType.ChangePhone:
        return { ...state, data: { ...state.data, phoneNumber: payload } };
      case ActionType.ChangeTitle:
        return { ...state, data: { ...state.data, title: payload } };
      case ActionType.ChangeLastName:
        return { ...state, data: { ...state.data, lastName: payload } };
      case ActionType.ChangeCompany:
        return { ...state, data: { ...state.data, companyId: payload } };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <Flex flexDir="column" h="full">
      <AddLeadContactInformationSection state={state} dispatch={dispatch} />
      <AddLeadCompanyTab />
      <AddLeadSaveButton
        onClick={() => {
          saveContact(state);
        }}
      />
    </Flex>
  );
};

export default AddLeadContactTabPanel;

// TODO improve this, company should be company ID and number
export type State = {
  data: {
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phoneNumber: string;
    companyId: string;
    note: string;
  };
  error: string | null;
};

export type Action = {
  type: ActionType;
  payload: string;
};

export enum ActionType {
  ChangeFirstName = 'CHANGE_FIRST_NAME',
  ChangeLastName = 'CHANGE_LAST_NAME',
  ChangeTitle = 'CHANGE_TITLE',
  ChangeEmail = 'CHANGE_EMAIL',
  ChangePhone = 'CHANGE_PHONE',
  ChangeCompany = 'CHANGE_COMPANY',
}
