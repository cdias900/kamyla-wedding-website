import styled from 'styled-components';

import coverImg from 'assets/images/cover.jpeg';

import { DEVICES } from 'styles/global';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  transition: all 0.3s;
`;

export const CoverImageContainer = styled.div`
  background-image: url(${coverImg});
  background-position: 46% center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const ImageBackdrop = styled.div`
  padding-bottom: 8rem;
  background-image: linear-gradient(#00000020, #00000080);
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ImageLabel = styled.h1`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 9rem;
  font-weight: 400;
  margin-bottom: 2.5rem;

  @media ${DEVICES.tablet} {
    font-size: 6rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 4rem;
  }
`;

export const ImageUpperLabel = styled.span`
  font-family: 'Volkhov', serif;
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  margin-bottom: 0.7rem;

  @media ${DEVICES.tablet} {
    font-size: 2rem;
  }

  @media ${DEVICES.mobile} {
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }
`;
