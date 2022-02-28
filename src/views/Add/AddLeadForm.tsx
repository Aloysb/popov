import { Flex } from '@chakra-ui/react';

import 'axios';

import { useAddLeadStore } from '../../store/AddLeadStore';

import LeadFormCompanySection from './LeadFormCompanySection';
import LeadFormLeadSection from './LeadFormLeadSection';
import LeadFormSaveButton from './LeadFormSaveButton';

const AddLeadForm = (): JSX.Element => {
  const { state, dispatch, saveNewLead } = useAddLeadStore();

  return (
    <Flex as="form" flexDir="column" h="full">
      <LeadFormLeadSection state={state} dispatch={dispatch} />
      <LeadFormCompanySection state={state} dispatch={dispatch} />
      <LeadFormSaveButton
        isLoading={state.isLoading}
        onClick={() => {
          saveNewLead();
        }}
      />
    </Flex>
  );
};

export default AddLeadForm;
