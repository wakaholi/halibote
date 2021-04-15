import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { CardContent } from '../domain/CardContent';

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  height: 200px;
  margin-top: 10px;
  padding: 8px;
  width: 288px;
`;

type Props = {
  cardContent: CardContent;
  index: number;
};

const Card: React.FC<Props> = ({ cardContent, index }) => (
  <div>
    <Draggable draggableId={cardContent.id} index={index}>
      {provided => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>{cardContent.title}</Title>
          <div>{cardContent.body}</div>
        </CardContainer>
      )}
    </Draggable>
  </div>
);

export default Card;
