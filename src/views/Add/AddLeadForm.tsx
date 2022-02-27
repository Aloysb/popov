import { Flex, StatHelpText, useToast } from '@chakra-ui/react';

import 'axios';

import { useAddLeadStore } from '../../store/AddLeadStore';

import LeadFormCompanySection from './LeadFormCompanySection';
import LeadFormSaveButton from './LeadFormSaveButton';
import LeadFormLeadSection from './LeadFormLeadSection';

const AddLeadForm = (): JSX.Element => {
  const { state, dispatch, saveNewLead } = useAddLeadStore();

  return (
    <Flex as="form" flexDir="column" h="full">
      <LeadFormLeadSection state={state} dispatch={dispatch} />
      <LeadFormCompanySection />
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
