import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const KanbanContainer = styled.div`
  padding: 20px;
`;

type CardContent = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  cardContents: CardContent[];
};

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

const Kanban: React.FC<Props> = ({ cardContents }) => (
  <KanbanContainer>
    {/* TODO:列ごとに表示出来るようにする、できればもっとシンプルにする */}
    <Droppable droppableId="cards">
      {droppableProvided => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          {cardContents.map((cardContent, index) => {
            return (
              <Draggable
                key={cardContent.id}
                draggableId={cardContent.id}
                index={index}
              >
                {draggableProvided => (
                  <CardContainer
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <Card title={cardContent.title}>{cardContent.body}</Card>
                  </CardContainer>
                )}
              </Draggable>
            );
          })}
        </div>
      )}
    </Droppable>
  </KanbanContainer>
);

export default Kanban;
