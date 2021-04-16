import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Kanban from './Kanban';
import { useKanbanContents } from './hooks/kanbanContents';

const AppContainer = styled.div`
  background-color: #99aab5;
  height: 100vh;
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

    const nextKanbanContents = [...kanbanContents];
    const [targetCard] = nextKanbanContents[columnNumber].splice(
      result.source.index,
      1,
    );
    nextKanbanContents[nextColumnNumber].splice(
      result.destination.index,
      0,
      targetCard,
    );

    updateKanbanContents(nextKanbanContents);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppContainer>
        <Kanban kanbanContents={kanbanContents} />
      </AppContainer>
    </DragDropContext>
  );
};

export default App;
