import React from 'react';
import styled from 'styled-components';
import halibote from '../images/halibote.svg';

const ProjectContainer = styled.div`
  align-items: center;
  background-color: #1b363f;
  display: flex;
  flex-flow: column;
  height: 100vh;
  min-width: 112px;
  overflow-y: scroll;
`;

const IconArea = styled.div`
  align-items: center;
  display: flex;
  height: 112px;
  justify-content: center;
  width: 112px;
`;

const NowProjectBadge = styled.div`
  align-items: center;
  background-color: #00afc7;
  border-radius: 10px;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 64px;
  justify-content: center;
  margin-top: 16px;
  width: 64px;
`;

const ProjectBadge = styled.div`
  align-items: center;
  background-color: #73afbf;
  border-radius: 10px;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 64px;
  justify-content: center;
  margin-top: 16px;
  width: 64px;
`;

// TODO: 新規作成・選択可能にする
const Project: React.FC = () => {
  return (
    <ProjectContainer>
      <IconArea>
        <img src={halibote} alt="メインアイコン" />
      </IconArea>
      <NowProjectBadge>FR</NowProjectBadge>
      <ProjectBadge>ST</ProjectBadge>
      <ProjectBadge>PN</ProjectBadge>
    </ProjectContainer>
  );
};

export default Project;
