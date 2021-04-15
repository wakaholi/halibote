import React from 'react';
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

const App: React.FC = () => <Kanban cardContents={testCards} />;

export default App;
