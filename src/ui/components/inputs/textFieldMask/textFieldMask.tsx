import Reatc from 'react';
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/textField/textField';
import { OutlinedTextFieldProps } from '@mui/material';

export interface TextFieldProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};
export default TextFieldMask;
