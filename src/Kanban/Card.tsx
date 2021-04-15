import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    <div>{children}</div>
  </div>
);

export default Card;
