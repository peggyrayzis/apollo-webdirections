import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Image } from 'mdx-deck';

import { colors, fontSize } from './theme';

export const FullScreen = ({ children }) => (
  <div style={{ width: '100vw' }}>{children}</div>
);

export const FullScreenBackground = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 4em;
  text-shadow: 7px 7px ${colors.lightBlue};
`;

const BioTitle = styled.p`
  margin: 0;
  font-family: 'Heebo', sans-serif;
  font-weight: 800;
  font-size: ${fontSize.small};
`;

export const Developer = ({ type }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <BioTitle style={{ fontSize: fontSize.medium, color: colors.lightBlue }}>
      {type === 'frontend' ? 'Frontend Dev' : 'Backend Dev'}
    </BioTitle>
  </div>
);

export const Quote = ({ quote, author }) => (
  <Fragment>
    <h2
      style={{
        color: colors.lightBlue,
        textAlign: 'left',
        fontSize: fontSize.medium,
      }}
    >
      {'"'+quote+'"'}
    </h2>
    <p
      style={{
        color: colors.black,
        fontSize: fontSize.small,
        textAlign: 'right',
        fontStyle: 'italic'
      }}
    >
      {'- '+author}
    </p>
  </Fragment>
);
