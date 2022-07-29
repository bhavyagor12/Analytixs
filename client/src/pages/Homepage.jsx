import React, { useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../utils/Theme";
import dark from "../assets/darkbg.png"
import white from "../assets/whitebg.png"

const Homepage = ({ darkMode, setDarkMode }) => {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Header><ThemeSwitcher>{darkMode ? <BsMoon size={30} onClick={() => { setDarkMode(!darkMode) }} /> : <BsSun size={30} onClick={() => { setDarkMode(!darkMode) }} />}</ThemeSwitcher></Header>
                <Main>
                    <Left>
                        <Text><h1>A Place</h1>
                            <h1>Every <span>Student</span> </h1>
                            <h1>Should be.</h1></Text>

                    </Left>
                    <Right>
                        {darkMode ? <Image src={dark} alt="" /> : <Image src={white} alt="" />}
                    </Right>
                </Main>
            </Container>
        </ThemeProvider>
    )
}

export default Homepage


const Container = styled.div`
  background-color:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text};
  height: 100vh
`;


const Header = styled.div`
display: flex;
height: 40px;
justify-content: flex-end;
`;

const ThemeSwitcher = styled.div`
   padding: 5px;
   margin-right:5px;
   padding-top: 10px;
   cursor: pointer;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.bg};
`

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 40px);
    margin-top: 5px;
`

const Left = styled.div`
flex: 6;
`

const Right = styled.div`
flex:4;
padding: 10px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Text = styled.div`
font-size: 40px;
font-weight: 600;
span{
    color: ${({ theme }) => theme.span};
}
`  