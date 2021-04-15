import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Kanban from './Kanban';
import { useCardContents } from './hooks/cardContents';

const AppContainer = styled.div`
  background-color: #99aab5;
  height: 100vh;
  width: 100vw;
`;

const App: React.FC = () => {
  const [cardContents, updateCardContents] = useCardContents();

  const onDragEnd = (result: DropResult) => {
    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const nextContents = [...cardContents];
    const [targetContent] = nextContents.splice(result.source.index, 1);
    nextContents.splice(result.destination.index, 0, targetContent);

    updateCardContents(nextContents);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppContainer>
        <Kanban cardContents={cardContents} />
      </AppContainer>
    </DragDropContext>
  );
};

export default App;
