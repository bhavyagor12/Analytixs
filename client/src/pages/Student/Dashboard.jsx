import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from './StudentSidebar';
import { darkTheme, lightTheme } from "../../utils/Theme";
import Navbar from "../../components/Navbar"
import Calendar from '../../components/Calendar';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.soft};
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
  padding: 22px 96px;
`;
const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Calendar />
          </Wrapper>
        </Main>

      </Container>
    </ThemeProvider >
  )
}

export default Dashboard