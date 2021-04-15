import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const KanbanContainer = styled.div`
  padding: 20px;
`;

type CardContent = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  cardContents: CardContent[];
};

const Kanban: React.FC<Props> = ({ cardContents }) => (
  <KanbanContainer>
    {cardContents.map(cardContent => {
      return (
        <Card key={cardContent.id} title={cardContent.title}>
          {cardContent.body}
        </Card>
      );
    })}
  </KanbanContainer>
);

export default Kanban;
