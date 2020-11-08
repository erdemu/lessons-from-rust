import React from 'react';
import styled from 'styled-components';
import { updaters } from 'mdx-deck';

const window = global;

const MetaBar = styled.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  height: '42px',
  display: 'flex'
});

const Info = styled.div([], {
  'margin-left': '20px',
  color: 'white'
});

const Button = styled.div([], {
  cursor: 'pointer',
  width: '64px',
  height: '100vh'
});

const Previous = styled(Button)([], {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0
});

const Next = styled(Button)([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0
});

const Provider = function ({ children, index, length, update }) {
  return (
    <React.Fragment>
      {children}
      <MetaBar>
        <Info>{ index + 1 } / { length }</Info>
      </MetaBar>
    </React.Fragment>
  );
};

export default Provider;