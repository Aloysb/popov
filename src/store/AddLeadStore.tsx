import { useReducer } from 'react';

import { useToast } from '@chakra-ui/react';

export const useAddLeadStore = () => {
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
  const isValidState = (state: State): null | string => {
    const error = Object.entries(state.data).find(([_, value]) => value === '');
    return error ? error[1] : null;
  };

  const reportError = (errorMessage: string): void => {
    toast({
      title: "Impossible d'enregister le contact",
      description: errorMessage,
      status: 'error',
    });
  };
  const toast = useToast({ position: 'top-right', variant: 'solid' });

  /// Save contact
  const saveNewLead = async (): Promise<boolean> => {
    dispatch({ type: ActionType.SetIsLoading, payload: true });
    const maybeError = isValidState(state);

    if (maybeError) {
      reportError(maybeError);
      // dispatch({ type: ActionType.SetIsLoading, payload: false });
      return false;
    }

    const body = Object.fromEntries(
      Object.entries(state.data).filter(([_, value]) => value !== '')
    );

    //! Note should be optional...
    // const res = await axios.post('http://127.0.0.1:8080/lead', {
    //   ...body,
    //   note: 'Hello',
    // });
    //  body);
    // dispatch({ type: ActionType.SetIsLoading, payload: false });
    return true;
  };

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
      case ActionType.SetIsLoading:
        return { ...state, isLoading: payload };
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
  SetIsLoading = 'SET_IS_LOADING',
}
