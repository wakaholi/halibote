import React from 'react';
import styled from 'styled-components';

const BoardsContainer = styled.div`
  align-items: center;
  background-color: #0c242c;
  display: flex;
  flex-flow: column;
  height: 100vh;
  overflow-y: scroll;
  width: 328px;
`;

const ProjectNameArea = styled.div`
  align-items: center;
  display: flex;
  height: 112px;
`;

const ProjectName = styled.div`
  color: #f4f5ff;
  font-size: 36px;
  font-weight: bold;
`;

const BoardNameContainer = styled.div`
  align-items: center;
  background-color: #0c242c;
  border-radius: 10px;
  display: flex;
  height: 51px;
  margin-top: 16px;
  width: 247px;
`;

const SelectedBoardNameContainer = styled.div`
  align-items: center;
  background-color: #1b363f;
  border-radius: 10px;
  display: flex;
  height: 51px;
  margin-top: 16px;
  width: 247px;
`;

const BoardLabel = styled.div`
  color: #f4f5ff;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
`;

const Boards: React.FC = () => {
  return (
    <BoardsContainer>
      <ProjectNameArea>
        <ProjectName>風月澪</ProjectName>
      </ProjectNameArea>
      <SelectedBoardNameContainer>
        <BoardLabel>FoxTale</BoardLabel>
      </SelectedBoardNameContainer>
      <BoardNameContainer>
        <BoardLabel>I&apos;m I</BoardLabel>
      </BoardNameContainer>
      <BoardNameContainer>
        <BoardLabel>なんかかっこいい曲</BoardLabel>
      </BoardNameContainer>
    </BoardsContainer>
  );
};

export default Boards;
