import { useState, useCallback } from 'react';
import { CardContent } from 'domain/CardContent';

const testKanbanContents = [
  [
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
  ],
  [
    {
      id: 'sakurai',
      title: '桜井梨穂子',
      body: '幼なじみ',
    },
    {
      id: 'umamusume',
      title: 'ウマ娘',
      body: 'みなきゃ',
    },
    {
      id: 'Psan',
      title: 'Pさん',
      body: '兄さん',
    },
  ],
  [
    {
      id: 'ayatsuji',
      title: '絢辻詞',
      body: '仮面優等生',
    },
    {
      id: 'tokyoRavens',
      title: '東京レイヴンズ',
      body: 'みなきゃ',
    },
    {
      id: 'Diamond',
      title: 'ダイアモンド',
      body: '何回転んだっていいさ',
    },
  ],
];

export const useKanbanContents = () => {
  const [kanbanContents, updateKanbanContents] = useState(testKanbanContents);

  const kanbanHandler = useCallback(
    (
      beforeColumn: number,
      afterColumn: number,
      beforeIndex: number,
      afterIndex: number,
      cardContent?: CardContent,
    ) => {
      const nextKanbanContents = [...kanbanContents];
      // cardContentがある場合は更新される。
      const targetCard = {
        ...nextKanbanContents[beforeColumn].splice(beforeIndex, 1)[0],
        ...cardContent,
      };

      nextKanbanContents[afterColumn].splice(afterIndex, 0, targetCard);

      updateKanbanContents(nextKanbanContents);
    },
    [kanbanContents],
  );

  return [kanbanContents, kanbanHandler] as const;
};
