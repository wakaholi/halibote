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

const App: React.FC = () => {
  const userInfo = useUserInfo();

  return (
    <>
      {userInfo.uid ? (
        <AppContainer>
          <Project />
          <Boards />
          <Kanban />
        </AppContainer>
      ) : null}
    </>
  );
};

export default App;
