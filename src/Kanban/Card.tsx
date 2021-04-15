import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  height: 200px;
  margin-top: 10px;
  padding: 8px;
  width: 288px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => (
  <StyledCard>
    <Title>{title}</Title>
    <div>{children}</div>
  </StyledCard>
);

export default Card;
