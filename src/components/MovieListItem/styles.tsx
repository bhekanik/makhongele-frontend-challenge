import {
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
} from '@material-ui/core';
import styled from 'styled-components';

export const ListItem = styled(MuiListItem)`
  display: flex;
`;

export const ListItemText = styled(MuiListItemText)`
  flex: 1;
  padding-right: 48px;
`;
