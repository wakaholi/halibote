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
  updateKanbanContents: (
    beforeColumn: number,
    afterColumn: number,
    beforeIndex: number,
    afterIndex: number,
    cardContent?: CardContent,
  ) => void;
};

const Kanban: React.FC<Props> = ({ kanbanContents, updateKanbanContents }) => (
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
                    column={kanbanIndex}
                    cardContent={cardContent}
                    index={cardIndex}
                    updateKanbanContents={updateKanbanContents}
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
