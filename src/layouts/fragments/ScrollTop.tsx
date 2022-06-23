import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import * as React from 'react';
import theme from 'src/app/theme';
import styled from 'styled-components';

interface OwnProps {
  children: React.ReactNode;
}

const Container = styled.div`
  position: fixed;
  bottom: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
`;

export const ScrollTop = (props: OwnProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (e.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <Container onClick={handleClick} role='presentation'>
        {children}
      </Container>
    </Zoom>
  );
};
