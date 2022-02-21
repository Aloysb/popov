import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { ActionType } from './AddLeadPage';

const AddLeadInput = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  </FormControl>
);

export default AddLeadInput;
