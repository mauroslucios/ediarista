import Reatc from 'react';
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/textField/textField';
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextFieldProps extends OutlinedTextFieldProps {
  value: string;
  mask: string;
}

const TextFieldMask: React.FC<TextFieldProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};
export default TextFieldMask;
