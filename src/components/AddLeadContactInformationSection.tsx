import { Heading, Stack } from '@chakra-ui/react';
import { ActionType, State, Action } from './AddLeadContactTabPanel';
import AddLeadInput from './AddLeadInput';

const AddLeadContactInformationSection = ({
  state,
  dispatch,
}: {
  state: State;
  dispatch: React.Dispatch<Action>;
}): JSX.Element => {
  const { firstName, lastName, phoneNumber, title, email } = state.data;

  const dispatchNewValue =
    (type: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type,
        payload: e.target.value,
      });
    };

  const inputsInfo: {
    label: string;
    placeholder: string;
    value: string;
    actionType: ActionType;
  }[] = [
    {
      label: 'Prénom',
      value: firstName,
      placeholder: 'Johnny',
      actionType: ActionType.ChangeFirstName,
    },
    {
      label: 'Nom',
      value: lastName,
      placeholder: 'Halliday',
      actionType: ActionType.ChangeLastName,
    },
    {
      label: 'Position',
      value: title,
      placeholder: 'Légende de la chanson',
      actionType: ActionType.ChangeTitle,
    },
    {
      label: 'Téléphone',
      value: phoneNumber,
      placeholder: '0612315412',
      actionType: ActionType.ChangePhone,
    },
    {
      label: 'Courriel',
      value: email,
      placeholder: 'allumer@lefeu.com',
      actionType: ActionType.ChangeEmail,
    },
  ];
  return (
    <>
      <Heading pb="2">Information</Heading>
      <Stack flex="1" spacing="4">
        {inputsInfo.map(({ label, value, placeholder, actionType }) => (
          <AddLeadInput
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={dispatchNewValue(actionType)}
          />
        ))}
      </Stack>
    </>
  );
};

export default AddLeadContactInformationSection;
