import { List as MuiList } from '@material-ui/core';
import theme from 'src/app/theme';
import styled from 'styled-components';

export const List = styled(MuiList)`
  width: 100%;
  maxwidth: 360px;
  background-color: ${theme.palette.background.paper};
`;
