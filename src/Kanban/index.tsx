import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { CardContent } from '../domain/CardContent';

const KanbanContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`;

type Props = {
  kanbanContents: CardContent[][];
};

const Kanban: React.FC<Props> = ({ kanbanContents }) => (
  <KanbanContainer>
    {kanbanContents.map((cardContents, kanbanIndex) => {
      const droppableId = `column${kanbanIndex}`;

      return (
        <Droppable key={droppableId} droppableId={droppableId}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cardContents.map((cardContent, cardIndex) => {
                return (
                  <Card
                    key={cardContent.id}
                    cardContent={cardContent}
                    index={cardIndex}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
    })}
  </KanbanContainer>
);

export default Kanban;
