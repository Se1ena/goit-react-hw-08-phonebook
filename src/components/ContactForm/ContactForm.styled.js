import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: 1px solid gray;
`;

export const Btn = styled.button`
  max-width: 100px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #80808061;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 35px;
  font-size: 15px;
  font-weight: 600;
`;
