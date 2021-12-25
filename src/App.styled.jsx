import styled from '@emotion/styled';

export const Container = styled.div`
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;
