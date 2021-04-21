import { useState, useEffect, useCallback } from 'react';
import { CardContent } from 'domain/CardContent';
import { Kanban, defaultKanban, ContentsFromRemote } from 'domain/Kanban';
import firebase from '../firebase';

const convertContentsFromArrToObj = (contents: CardContent[][]) => {
  return contents.reduce((colomnAcc, currentColumn, columnIndex) => {
    const convertedCards = currentColumn.reduce(
      (cardAcc, currentCard, cardIndex) => {
        const copyCardAcc = { ...cardAcc };
        copyCardAcc[cardIndex] = currentCard;

        return copyCardAcc;
      },
      {} as CardContent[],
    );
    const copyColomnAcc = { ...colomnAcc };
    copyColomnAcc[columnIndex] = convertedCards;

    return copyColomnAcc;
  }, {} as CardContent[][]);
};

const convertContentsFromObjToArr = (
  contents: ContentsFromRemote,
): CardContent[][] => {
  const convertedContents = Object.keys(contents).map(columnKey => {
    const convertedColumn = Object.keys(contents[columnKey]).map(cardKey => {
      return contents[columnKey][cardKey];
    });

    return convertedColumn;
  });

  return convertedContents;
};

const createKanban = async (kanban: Kanban) => {
  const db = firebase.firestore();
  const convertedContents = convertContentsFromArrToObj(kanban.contents);

  try {
    const doc = await db.collection('kanban').add({
      ...kanban,
      ownerId: firebase.auth().currentUser?.uid,
      contents: JSON.stringify(convertedContents),
    });

    return { ...kanban, id: doc.id, ownerId: firebase.auth().currentUser?.uid };
  } catch (e) {
    throw new Error(e);
  }
};

const updateKanban = async (kanban: Kanban) => {
  const db = firebase.firestore();
  const convertedContents = convertContentsFromArrToObj(kanban.contents);

  try {
    await db
      .collection('kanban')
      .doc(kanban.id)
      .set({
        ...kanban,
        contents: JSON.stringify(convertedContents),
      });
  } catch (e) {
    throw new Error(e);
  }
};

const fetchKanban = async (): Promise<Kanban> => {
  const db = firebase.firestore();
  const currentUserId = firebase.auth().currentUser?.uid;
  const querySnapshot = await db
    .collection('kanban')
    .where('ownerId', '==', currentUserId)
    .get();

  const kanban = querySnapshot.docs[0].data();
  const converterContents = convertContentsFromObjToArr(
    JSON.parse(kanban.contents),
  );

  return {
    ...kanban,
    contents: converterContents,
  };
};

export const useKanbanContents = () => {
  const [kanban, setKanban] = useState(defaultKanban);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchKanban();
      if (data.id) {
        setKanban(data);
      }
    };
    fetchData();
  }, []);

  const kanbanHandler = useCallback(
    async (
      beforeColumn: number,
      afterColumn: number,
      beforeIndex: number,
      afterIndex: number,
      cardContent?: CardContent,
    ) => {
      const copyKanban = { ...kanban };
      const nextKanbanContents = [...copyKanban.contents];
      // cardContentがある場合は更新される。
      const targetCard = {
        ...nextKanbanContents[beforeColumn].splice(beforeIndex, 1)[0],
        ...cardContent,
      };

      nextKanbanContents[afterColumn].splice(afterIndex, 0, targetCard);
      const nextKanban = { ...copyKanban, contents: nextKanbanContents };

      if (nextKanban.id) {
        await updateKanban(nextKanban);
        setKanban(nextKanban);
      } else {
        const newKanban = await createKanban(nextKanban);
        setKanban(newKanban);
      }
    },
    [kanban],
  );

  return [kanban, kanbanHandler] as const;
};
