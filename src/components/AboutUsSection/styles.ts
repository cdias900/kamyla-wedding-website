import styled from 'styled-components';

import { Text } from 'components/Text';

import { DEVICES } from 'styles/global';

export const AboutUsContainer = styled.div`
  margin: 9.6rem auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICES.desktop} {
    margin: 6rem auto 0;
    width: 85vw;
  }

  @media ${DEVICES.tablet} {
    width: 90vw;
  }

  @media ${DEVICES.mobile} {
    margin: 4.8rem auto 0;
    width: 95vw;
  }
`;

export const AboutUsText = styled(Text)`
  width: 40vw;
  text-align: justify;

  @media ${DEVICES.desktop} {
    width: 70vw;
  }

  @media ${DEVICES.small} {
    width: 75vw;
  }

  @media ${DEVICES.tablet} {
    width: 80vw;
  }

  @media ${DEVICES.mobile} {
    width: 85vw;
  }
`;
