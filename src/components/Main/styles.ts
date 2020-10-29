import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 3rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
`;
