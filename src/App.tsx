import React from 'react';
import styled from 'styled-components';
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

const App: React.FC = () => (
  <AppContainer>
    <Kanban cardContents={testCards} />
  </AppContainer>
);

export default App;
