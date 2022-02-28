import axios from 'axios';
import { useReducer } from 'react';

import { useToast } from '@chakra-ui/react';
import APIEndpoints from '../utils/endpoints';

export const useAddLeadStore = (): AddLeadStore => {
  // Initialise toast
  // ? Maybe this could be initialised only in the main ?
  const toast = useToast({ position: 'top-right', variant: 'solid' });

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
    isLoading: false,
    error: null,
  };

  /// Return the error or null
  const validateForm = (state: State): null | string => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const error = Object.entries(state.data).find(([_, value]) => value === '');
    // Return the key of the first pair [key,value] to have an empty value
    return error ? error[0] : null;
  };

  // Notify the error via toasts
  const notifyError = (errorMessage: string): void => {
    toast({
      title: "Impossible d'enregister le contact",
      description: errorMessage,
      status: 'error',
      isClosable: true,
    });
  };

  // Save contact
  const saveNewLead = async (): Promise<boolean> => {
    dispatch({ type: ActionType.SetIsLoading, payload: true });

    const maybeError = validateForm(state);

    if (maybeError) {
      notifyError(maybeError);
      dispatch({ type: ActionType.SetIsLoading, payload: false });
      // Wrap the false into a promise before returning
      return new Promise((res) => res(false));
    }

    // Filter the empty values out
    const body = Object.fromEntries(
      Object.entries(state.data).filter(([_, value]) => value !== '')
    );

    // //! Note should be optional...
    return axios
      .post(APIEndpoints.lead.add, {
        ...body,
        note: 'Hello',
      })
      .then(() => {
        resetForm();
        toast({
          status: 'success',
          title: "C'est tout bon!",
          description: `${state.data.firstName} a été sauvegardé`,
          isClosable: true,
        });
        dispatch({ type: ActionType.SetIsLoading, payload: false });
        return true;
      })
      .catch((e) => {
        notifyError(e.toString());
        dispatch({ type: ActionType.SetIsLoading, payload: false });
        return false;
      });
  };

  function resetForm() {
    dispatch({ type: ActionType.ResetForm, payload: null });
  }

  const formReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
      case ActionType.ChangeEmail:
        return { ...state, data: { ...state.data, email: payload as string } };
      case ActionType.ChangeFirstName:
        return {
          ...state,
          data: { ...state.data, firstName: payload as string },
        };
      case ActionType.ChangePhone:
        return {
          ...state,
          data: { ...state.data, phoneNumber: payload as string },
        };
      case ActionType.ChangeTitle:
        return { ...state, data: { ...state.data, title: payload as string } };
      case ActionType.ChangeLastName:
        return {
          ...state,
          data: { ...state.data, lastName: payload as string },
        };
      case ActionType.ChangeCompany:
        return {
          ...state,
          data: { ...state.data, companyId: payload as string },
        };
      case ActionType.SetIsLoading:
        return { ...state, isLoading: payload as boolean };
      case ActionType.ResetForm:
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return {
    state,
    dispatch,
    saveNewLead,
  };
};

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
  isLoading: boolean;
};

export type Action =
  | {
      type:
        | ActionType.ChangeCompany
        | ActionType.ChangeEmail
        | ActionType.ChangeFirstName
        | ActionType.ChangeLastName
        | ActionType.ChangeTitle
        | ActionType.ChangePhone;
      payload: string;
    }
  | { type: ActionType.SetIsLoading; payload: boolean }
  | { type: ActionType.ResetForm; payload: null };

export enum ActionType {
  ChangeFirstName = 'CHANGE_FIRST_NAME',
  ChangeLastName = 'CHANGE_LAST_NAME',
  ChangeTitle = 'CHANGE_TITLE',
  ChangeEmail = 'CHANGE_EMAIL',
  ChangePhone = 'CHANGE_PHONE',
  ChangeCompany = 'CHANGE_COMPANY',
  SetIsLoading = 'SET_IS_LOADING',
  ResetForm = 'RESET_FORM',
}

type AddLeadStore = {
  state: State;
  dispatch: React.Dispatch<Action>;
  saveNewLead: () => Promise<boolean>;
};
