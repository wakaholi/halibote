import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Kanban from './Kanban';
import Project from './Project';
import Boards from './Boards';
import { useKanbanContents } from '../hooks/kanbanContents';
import { useUserInfo } from '../hooks/userInfo';

const AppContainer = styled.div`
  background-color: #0c242c;
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
`;

const App: React.FC = () => {
  const [kanbanContents, updateKanbanContents] = useKanbanContents();
  const userInfo = useUserInfo();

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
    updateKanbanContents(
      columnNumber,
      nextColumnNumber,
      result.source.index,
      result.destination.index,
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {userInfo.uid ? (
        <AppContainer>
          <Project />
          <Boards />
          <Kanban
            kanbanContents={kanbanContents}
            updateKanbanContents={updateKanbanContents}
          />
        </AppContainer>
      ) : null}
    </DragDropContext>
  );
};

export default App;
