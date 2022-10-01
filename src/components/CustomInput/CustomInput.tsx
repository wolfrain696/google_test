import { TextField, TextFieldProps, styled } from '@mui/material';

const StyledCustomInput = styled(TextField)`
  width: 100%;
` as typeof TextField;

export const CustomInput = (props: TextFieldProps) => <StyledCustomInput {...props} />;
