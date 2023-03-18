import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  padding: 35px;
  margin-bottom: 61px;

  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
  background-color: white;
  border: 2px solid lightgrey;
  border-radius: 12px;
`;

export const Label = styled.label`
  display: block;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: grey;
`;

export const Input = styled.input`
  height: 25px;

  border: 1px solid lightgrey;
  border-radius: 4px;
  :hover {
    border-color: grey;
  }
`;

export const SubmitButton = styled.button`
  padding: 4px 12px;
  display: inline-block;
  font-size: 16px;
  color: grey;
  margin: 0 auto;
  cursor: pointer;
  border: 2px solid lightgrey;
  border-radius: 8px;
  :hover {
    background-color: grey;
    color: white;
  }
`;
