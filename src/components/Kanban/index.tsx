import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './Column';
import { useKanbanContents } from '../../hooks/kanbanContents';
import { defaultContent } from '../../domain/CardContent';
import AddTaskButton from '../Buttons/AddTaskButton';

const KanbanContainer = styled.div`
  background-color: #f4f5ff;
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: solid 0.5px #303435;
  display: flex;
  height: 112px;
  justify-content: space-between;
`;

const ProjectTitleLabel = styled.div`
  font-size: 48px;
  font-weight: 900;
`;

const UserImg = styled.img`
  border-radius: 40px;
  height: 64px;
  width: 64px;
`;

const TasksLabel = styled.div`
  font-size: 48px;
  font-weight: 900;
  margin-top: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
`;

type Props = {
  photoUrl: string | null;
};

const Kanban: React.FC<Props> = ({ photoUrl }) => {
  const [kanban, updateKanban] = useKanbanContents();
  const kanbanContents = kanban.contents;

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const columnNumber = Number(
      result.source.droppableId.substr(result.source.droppableId.length - 1),
    );
    const nextColumnNumber = Number(
      result.destination.droppableId.substr(
        result.destination.droppableId.length - 1,
      ),
    );
    updateKanban(
      columnNumber,
      nextColumnNumber,
      result.source.index,
      result.destination.index,
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanContainer>
        <Header>
          <ProjectTitleLabel>Board Name</ProjectTitleLabel>
          {photoUrl && <UserImg src={photoUrl} />}
        </Header>
        <TasksLabel>Tasks</TasksLabel>
        <FlexContainer>
          {kanbanContents.map((cardContents, index) => {
            const droppableId = `column${index}`;

            return (
              <Column
                key={droppableId}
                column={index}
                cardContents={cardContents}
                updateKanban={updateKanban}
              />
            );
          })}
        </FlexContainer>
        <AddTaskButton
          onClick={() => {
            const newCard = {
              ...defaultContent,
              id: uuidv4(),
            };
            updateKanban(
              0,
              0,
              kanbanContents[0].length,
              kanbanContents[0].length + 1,
              newCard,
            );
          }}
        />
      </KanbanContainer>
    </DragDropContext>
  );
};

export default Kanban;
