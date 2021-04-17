import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Kanban from './Kanban';
import { useKanbanContents } from './hooks/kanbanContents';

const AppContainer = styled.div`
  background-color: #99aab5;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
`;

const App: React.FC = () => {
  const [kanbanContents, updateKanbanContents] = useKanbanContents();

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
      <AppContainer>
        <Kanban
          kanbanContents={kanbanContents}
          updateKanbanContents={updateKanbanContents}
        />
      </AppContainer>
    </DragDropContext>
  );
};

export default App;
