import React, { useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../utils/Theme";

const Container = styled.div`
  background-color:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text};
  height: 100vh
  
  
`;

const Homepage = ({ darkMode, setDarkMode }) => {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                {darkMode ? <BsMoon size={30} onClick={() => { setDarkMode(!darkMode) }} /> : <BsSun size={30} onClick={() => { setDarkMode(!darkMode) }} />}
            </Container>
        </ThemeProvider>
    )
}

export default Homepage