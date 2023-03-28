import styled from 'styled-components';

export const FilterContact = styled.input`
  width: 400px;
  margin-bottom: 20px;
  outline: none;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 3px;
  transition: all 300ms;
  &:hover,
  &:focus {
    border: 1px solid blue;
    box-shadow: 1px 1px 1px grey;
  }
`;
