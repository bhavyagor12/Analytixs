import React, { useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs"
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../utils/Theme";
import { AiOutlineArrowRight } from "react-icons/ai"
import trial from "../assets/trial.jpg"
import { Link } from "react-router-dom"

const Homepage = ({ darkMode, setDarkMode }) => {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Header><ThemeSwitcher>{darkMode ? <BsMoon size={30} onClick={() => { setDarkMode(!darkMode) }} /> : <BsSun size={30} onClick={() => { setDarkMode(!darkMode) }} />}</ThemeSwitcher></Header>
                <Main>
                    <Left>
                        <Title>ANALYTIX</Title>
                        <Typing>Education is the movement from darkness to light.</Typing>
                        <Text>
                            <h1>A Place</h1>
                            <h1>Every <span>Student</span> & <span>Teacher</span> </h1>
                            <h1>Should Be<sub>•</sub></h1>
                        </Text>
                        <Subtitle>
                            <h2><span>Education</span> is smart enough to change</h2>
                            <h2>the human mind <span>positively!</span></h2>
                        </Subtitle>
                        <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
                            <Button>
                                Get Started
                                <Icon><AiOutlineArrowRight size={20} /></Icon>
                            </Button>
                        </Link>


                    </Left>
                    <Right>

                        {/* {darkMode ? <Image src={dark} alt="" /> : <Image src={white} alt="" />} */}
                        <Image src={trial} alt="" />
                    </Right>
                </Main>
            </Container>
        </ThemeProvider >
    )
}

export default Homepage


const Container = styled.div`
  background-color:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text};
  height: 100vh
`;


const Header = styled.div`
position: absolute;
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
    align-items: center;
`

const Left = styled.div`
flex: 6;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 10px;
padding: 20px;

`

const Right = styled.div`
flex:4;
display: flex;
justify-content: flex-end;
align-items: flex-end;
;

`

const Title = styled.h1`
text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 60px;
  margin-bottom: 15px;


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

`;

const Image = styled.img`

   width: 100%;
   height: calc(100vh - 40px);
   object-fit: fill;
`

const Text = styled.div`
font-size: 30px;
font-weight: 600;
span{
    color: ${({ theme }) => theme.span};
}
`

const Subtitle = styled.div`
font-size: 20px;
font-weight: 400;
span{
    color: ${({ theme }) => theme.span};
}
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.span}; /* Green */
  border: none;
  color: ${({ theme }) => theme.soft};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 5px;
  border-radius: 12px;
  margin-top: 25px;
:hover {
  background-color: ${({ theme }) => theme.text}; /* Green */
  color: ${({ theme }) => theme.soft};
}
`

const Icon = styled.div`
border-radius: 50%;
margin-top: 2px;
`


const Typing = styled.div`
  width: 49ch;
  animation: typing 4s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 34px;
  margin-bottom: 10px;


@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
`