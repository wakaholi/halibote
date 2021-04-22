import React from 'react';
import styled from 'styled-components';
import Kanban from './Kanban';
import Project from './Project';
import Boards from './Boards';
import { useUserInfo } from '../hooks/userInfo';

const AppContainer = styled.div`
  background-color: #0c242c;
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
`;

const TODOComponent = styled.div`
  align-items: center;
  background-color: rgba(12, 36, 44, 0.5);
  color: #f4f5ff;
  display: flex;
  font-size: 60px;
  font-weight: 900;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 440px;
`;

const App: React.FC = () => {
  const userInfo = useUserInfo();

  return (
    <>
      {userInfo.uid ? (
        <AppContainer>
          <TODOComponent>【TODO】</TODOComponent>
          <Project />
          <Boards />
          <Kanban photoUrl={userInfo.photoUrl} />
        </AppContainer>
      ) : null}
    </>
  );
};

export default App;
