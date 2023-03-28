import styled from 'styled-components';

// import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled.form`
  width: 400px;
  padding: 5px;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  font-size: 20px;
  font-weight: 450px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Field = styled.input`
  width: auto;
  margin-bottom: 20px;
  outline: none;
  padding: 5px 10px;
  color: blue;
  border: 1px solid grey;
  border-radius: 3px;
  transition: all 300ms;
  &:hover,
  &:focus {
    border: 1px solid blue;
    box-shadow: 1px 1px 1px grey;
  }
`;

export const FormSubmit = styled.button`
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
`;
