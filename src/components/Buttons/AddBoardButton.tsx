import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid 2px #f4f5ff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  height: 40px;
  margin-top: 16px;
  width: 304px;

  :hover {
    background-color: rgba(244, 245, 255, 0.25);
  }
`;

type Props = React.ElementType<'button'>;
const AddBoardButton: React.FC<Props> = props => {
  return <StyledButton {...props}>Add Board</StyledButton>;
};

export default AddBoardButton;
