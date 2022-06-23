import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from 'next/link';
import * as React from 'react';
import { ScrollTop } from './fragments/ScrollTop';

interface Props {
  children: React.ReactElement;
}

export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Link href='/'>
            <Button style={{ color: 'white' }}>
              <Typography color='inherit' variant='h6'>
                Movies App
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <Container>{props.children}</Container>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
