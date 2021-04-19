import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid 2px #0c242c;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  height: 40px;
  margin-top: 16px;
  width: 304px;

  :hover {
    background-color: rgba(12, 36, 44, 0.1);
  }
`;

type Props = JSX.IntrinsicElements['button'];
const AddTaskButton: React.FC<Props> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Add Task</StyledButton>;
};

export default AddTaskButton;
