import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { CardContent } from '../../domain/CardContent';

const Title = styled.input`
  border: 0;
  font-size: 18px;
  font-weight: 900;
`;

const TextArea = styled.textarea`
  border: 0;
  font-size: 13px;
  height: 118px;
  margin-top: 8px;
  resize: none;
  width: 100%;
`;

const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 25px 2px rgba(0, 0, 0, 0.1);
  height: 200px;
  margin-top: 16px;
  padding: 8px;
  width: 288px;
`;

const CardContentContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
`;

type Props = {
  column: number;
  cardContent: CardContent;
  index: number;
  updateKanban: (
    beforeColumn: number,
    afterColumn: number,
    beforeIndex: number,
    afterIndex: number,
    cardContent?: CardContent,
  ) => void;
};

const Card: React.FC<Props> = ({
  column,
  cardContent,
  index,
  updateKanban,
}) => {
  const [title, setTitle] = useState(cardContent.title);
  const [body, setBody] = useState(cardContent.body);
  const draggableId = cardContent.id || `draggable-${index}`;

  return (
    <div>
      <Draggable draggableId={draggableId} index={index}>
        {provided => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContentContainer>
              <Title
                value={title}
                onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                  setTitle(event.currentTarget.value);
                }}
                onBlur={() => {
                  const nextCard = {
                    ...cardContent,
                    title,
                  };
                  updateKanban(column, column, index, index, nextCard);
                }}
                maxLength={12}
                placeholder="タイトル"
              />
              <TextArea
                onChange={(
                  event: React.SyntheticEvent<HTMLTextAreaElement>,
                ) => {
                  setBody(event.currentTarget.value);
                }}
                onBlur={() => {
                  const nextCard = {
                    ...cardContent,
                    body,
                  };
                  updateKanban(column, column, index, index, nextCard);
                }}
                rows={7}
                defaultValue={body}
                placeholder="タスクの概要を書いてください"
              />
            </CardContentContainer>
          </CardContainer>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
