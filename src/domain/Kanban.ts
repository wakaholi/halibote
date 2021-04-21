import { CardContent } from './CardContent';

export type Kanban = {
  id?: string;
  ownerId?: string;
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
