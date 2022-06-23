import {
  Button as MuiButton,
  Card as MuiCard,
  Breadcrumbs as MuiBreadcrumbs,
  TextField as MuiTextField,
} from '@material-ui/core';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  align-item: center;
  flex-direction: column;
`;

export const TextField = styled(MuiTextField)`
  flex: 3;
`;

export const Button = styled(MuiButton)`
  flex: 1;
  padding: 18px 14px;
`;

export const Card = styled(MuiCard)`
  margin-top: 2rem;
`;

export const Breadcrumbs = styled(MuiBreadcrumbs)`
  margin-top: 2rem;
`;
