import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { CardContent } from '../domain/CardContent';

const KanbanContainer = styled.div`
  padding: 20px;
`;

type Props = {
  cardContents: CardContent[];
};

const Kanban: React.FC<Props> = ({ cardContents }) => (
  <KanbanContainer>
    {/* TODO:列ごとに表示出来るようにする */}
    <Droppable droppableId="cards">
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {cardContents.map((cardContent, index) => {
            return (
              <Card
                key={cardContent.id}
                cardContent={cardContent}
                index={index}
              />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </KanbanContainer>
);

export default Kanban;
