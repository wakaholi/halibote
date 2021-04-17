import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { CardContent } from '../domain/CardContent';

const Title = styled.input`
  border: 0;
  font-size: 20px;
  font-weight: 900;
`;

const TextArea = styled.textarea`
  border: 0;
  font-size: 13px;
  font-weight: Bold;
  height: 100%;
  margin-top: 8px;
  resize: none;
  width: 100%;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  height: 200px;
  margin-top: 10px;
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
  updateKanbanContents: (
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
  updateKanbanContents,
}) => {
  const [title, setTitle] = useState(cardContent.title);
  const [body, setBody] = useState(cardContent.body);

  return (
    <div>
      <Draggable draggableId={cardContent.id} index={index}>
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
                  updateKanbanContents(column, column, index, index, nextCard);
                }}
                maxLength={12}
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
                  updateKanbanContents(column, column, index, index, nextCard);
                }}
                rows={7}
                defaultValue={body}
              />
            </CardContentContainer>
          </CardContainer>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
