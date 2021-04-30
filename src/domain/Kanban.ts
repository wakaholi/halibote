import { CardContent } from './CardContent';

export type Kanban = {
  // カンバン自体ののId
  id?: string;
  // 看板のownerのuid
  ownerId?: string;
  // 看板の内容
  contents: CardContent[][];
};

export type ContentsFromRemote = {
  [key: string]: {
    [key: string]: {
      id: string;
      title: string;
      body: string;
    };
  };
};

export const defaultKanban: Kanban = {
  id: '',
  ownerId: '',
  contents: [[], [], []],
};
