import { FormControl, FormLabel, Input } from '@chakra-ui/react';

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
    <FormLabel
      textTransform="uppercase"
      color="whiteAlpha.700"
      letterSpacing="widest"
      fontSize="small"
    >
      {label}
    </FormLabel>
    <Input
      focusBorderColor="orange.700"
      boxShadow="inner"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  </FormControl>
);

export default AddLeadInput;
