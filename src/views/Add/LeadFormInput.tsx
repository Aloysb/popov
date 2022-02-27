import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const LeadFormInput = ({
  label,
  placeholder,
  value,
  onChange,
}: LeadFormInputProps): JSX.Element => (
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
      boxShadow="inner"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      _focus={{
        bg: 'gray.900',
        boxShadow: 'inner',
        borderColor: 'orange.700',
      }}
    />
  </FormControl>
);

export default LeadFormInput;

type LeadFormInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
