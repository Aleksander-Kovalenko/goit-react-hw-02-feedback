import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  min-width: 70px;
  padding: 5px;
  font-size: 18px;
  font-width: 700px;

  text-align: center;

  border-radius: 5px;
  transition: transform 250ms;

  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
