import styled from 'styled-components';

export const Contacts = styled.ul`
  width: 400px;
`;
export const Contact = styled.li`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 3px;
`;
export const DelButton = styled.button`
width: 115px;
font-size: 14px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
padding: 15px;
border: 2px solid blue;
border-radius: 3px;
background-color: white;
color: blue;
transition: all 300ms;
&:hover,
&:focus {
  background-color: blue;
  color: white;
  box-shadow: 1px 1px 2px grey;
}
`