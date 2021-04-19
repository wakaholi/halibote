import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { CardContent } from '../../domain/CardContent';
import Card from './Card';

const Title = styled.div`
  font-size: 24px;
`;

const TITLE_TEXT = ['To Do', 'In Progress', 'Done'];

const ColumnContainer = styled.div`
  margin-right: 28px;
  width: 304px;
`;

const DroppableArea = styled.div`
  min-height: 200px;
`;

type Props = {
  column: number;
  cardContents: CardContent[];
  updateKanbanContents: (
    beforeColumn: number,
    afterColumn: number,
    beforeIndex: number,
    afterIndex: number,
    cardContent?: CardContent,
  ) => void;
};

const Column: React.FC<Props> = ({
  column,
  cardContents,
  updateKanbanContents,
}) => {
  const droppableId = `column${column}`;

  return (
    <ColumnContainer>
      <div>
        {/* 将来的にcolumnのラベルを変更できるようにする */}
        <Title>{TITLE_TEXT[column]}</Title>
        <Droppable key={droppableId} droppableId={droppableId}>
          {provided => (
            <DroppableArea ref={provided.innerRef} {...provided.droppableProps}>
              {cardContents.map((cardContent, cardIndex) => {
                return (
                  <Card
                    key={cardContent.id}
                    column={column}
                    cardContent={cardContent}
                    index={cardIndex}
                    updateKanbanContents={updateKanbanContents}
                  />
                );
              })}
              {provided.placeholder}
            </DroppableArea>
          )}
        </Droppable>
      </div>
    </ColumnContainer>
  );
};

export default Column;
