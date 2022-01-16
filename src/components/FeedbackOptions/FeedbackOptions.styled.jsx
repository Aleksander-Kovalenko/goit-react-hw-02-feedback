import styled from '@emotion/styled';

export const Button = styled.button`
  min-width: 50px;
  padding: 5px;
  text-align: center;

  border-radius: 5px;
  transition: transform 500ms;

  &:hover,
  &:focus-visible {
    color: white;
    background-color: teal;
    transform: scale(1.2);
  }
`;
