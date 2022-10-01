import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyledModalContent = styled(Card)`
  background-color: white;
  width: 320px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
