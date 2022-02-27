import { Heading, Stack } from '@chakra-ui/react';

import { Action, ActionType, State } from '../../store/AddLeadStore';

import LeadFormInput from './LeadFormInput';

const LeadFormLeadSection = ({
  state,
  dispatch,
}: LeadFormLeadSectionProps): JSX.Element => {
  // Generate list of inputs details such as placeholders ...
  const inputs = generateInputs(state);

  // Helper dispatcher
  const dispatchNewValue =
    (type: ActionType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type,
        payload: e.target.value,
      });
    };

  return (
    <>
      <Heading pb="2">Information</Heading>
      <Stack flex="1" spacing="4">
        {inputs.map(({ label, value, placeholder, actionType }) => (
          <LeadFormInput
            key={label}
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

export default LeadFormLeadSection;

type LeadFormLeadSectionProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const generateInputs = (
  state: State
): {
  label: string;
  placeholder: string;
  value: string;
  actionType: ActionType;
}[] => [
  {
    label: 'Prénom',
    value: state.data.firstName,
    placeholder: 'Johnny',
    actionType: ActionType.ChangeFirstName,
  },
  {
    label: 'Nom',
    value: state.data.lastName,
    placeholder: 'Halliday',
    actionType: ActionType.ChangeLastName,
  },
  {
    label: 'Position',
    value: state.data.title,
    placeholder: 'Légende de la chanson',
    actionType: ActionType.ChangeTitle,
  },
  {
    label: 'Téléphone',
    value: state.data.phoneNumber,
    placeholder: '0612315412',
    actionType: ActionType.ChangePhone,
  },
  {
    label: 'Courriel',
    value: state.data.email,
    placeholder: 'allumer@lefeu.com',
    actionType: ActionType.ChangeEmail,
  },
];
