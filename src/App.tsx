import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Kanban from './Kanban';

const testCards = [
  {
    id: 'nanasaki',
    title: '七咲逢',
    body: '水泳部後輩',
  },
  {
    id: 'shinboriRudorufu',
    title: 'アグネスタキオン',
    body: 'ハイライトなんていらないんですよやっぱり',
  },
  {
    id: 'cherryBakushinKing',
    title: 'サクラバクシンオー',
    body: 'バクシンバクシンバクシンー！！！！！',
  },
];

const AppContainer = styled.div`
  background-color: #99aab5;
  height: 100vh;
  width: 100vw;
`;

const onDragEnd = (result: DropResult) => {
  console.log(result);
};

const App: React.FC = () => (
  <DragDropContext onDragEnd={onDragEnd}>
    <AppContainer>
      <Kanban cardContents={testCards} />
    </AppContainer>
  </DragDropContext>
);

export default App;
