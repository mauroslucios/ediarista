import { styled } from '@mui/material/styles';

export const SafeEnvironmentContainer = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)}0;
  font-size: 12px;
`;
