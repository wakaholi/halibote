import { useState } from 'react';

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

export const useCardContents = () => {
  const [cardContents, updateCardContents] = useState(testCards);

  return [cardContents, updateCardContents] as const;
};
