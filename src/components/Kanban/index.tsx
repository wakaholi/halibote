import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { CardContent } from '../../domain/CardContent';

const KanbanContainer = styled.div`
  background-color: #f4f5ff;
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: solid 0.5px #303435;
  display: flex;
  height: 112px;
`;

const ProjectTitleLabel = styled.div`
  font-size: 48px;
  font-weight: 900;
`;

const TasksLabel = styled.div`
  font-size: 48px;
  font-weight: 900;
  margin-top: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
`;

type Props = {
  kanbanContents: CardContent[][];
  updateKanbanContents: (
    beforeColumn: number,
    afterColumn: number,
    beforeIndex: number,
    afterIndex: number,
    cardContent?: CardContent,
  ) => void;
};

const Kanban: React.FC<Props> = ({ kanbanContents, updateKanbanContents }) => (
  <KanbanContainer>
    <Header>
      <ProjectTitleLabel>FoxTale</ProjectTitleLabel>
    </Header>
    <TasksLabel>Tasks</TasksLabel>
    <FlexContainer>
      {kanbanContents.map((cardContents, index) => {
        const droppableId = `column${index}`;

        return (
          <Column
            key={droppableId}
            column={index}
            cardContents={cardContents}
            updateKanbanContents={updateKanbanContents}
          />
        );
      })}
    </FlexContainer>
  </KanbanContainer>
);

export default Kanban;
