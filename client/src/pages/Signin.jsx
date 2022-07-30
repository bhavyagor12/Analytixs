import axios from 'axios';
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess, loginStart } from "../redux/userSlice";
import { Navigate, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineProfile, AiOutlineMail} from 'react-icons/ai';
import logindark from '../assets/logindark.png';
import loginwhite from '../assets/loginwhite.png';
import {RiLoginBoxLine} from 'react-icons/ri';
import { darkTheme, lightTheme } from "../utils/Theme";
import { BsMoon, BsSun } from "react-icons/bs"

const Container = styled.div`
display: flex;
height: 100vh;
justify-content: center;
/* color: ${({ theme }) => theme.text}; */
color: ${({ theme }) => theme.text};
background-color:${({ theme }) => theme.bg};
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

const Wrapper = styled.div`

display: flex;
align-items: center;
flex-direction:column;
padding:50px;
/* border:2px solid ${({ theme }) => theme.soft}; */
gap: 10px;

`;

const Title = styled.h1`
margin-top: 100px;
font-size: 50px;
margin-bottom: 30px;

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
  font-size: 50px;



@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

`;

const SubTitle = styled.h2`
font-style: 20px;
font-size: 30px;
font-weight: bold;
margin-bottom: 30px;
`;
const Input = styled.input`
border:none;
border-radius:3px;
color:black;
background-color: transparent;
outline:none;
`;

const Tags = styled.div`
border:2px solid ${({ theme }) => theme.soft};
border-radius:5px;
background-color: white;
display: flex;
padding:20px;
outline:none;
margin-bottom:5px;
color: ${({ theme }) => theme.text};
:hover{
    border:2px solid ${({ theme }) => theme.span};
}
`;

const Inputicon = styled.div`
margin-top: 4px;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.span}; /* Green */
  border: none;
  color: ${({ theme }) => theme.soft};
  padding: 20px 30px;
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
  cursor: pointer;
:hover {
  background-color: ${({ theme }) => theme.text}; /* Green */
  color: ${({ theme }) => theme.soft};
}
`

const Icon = styled.div`
margin-top: 2px;
margin-left: 5px;
`

const Divide1 = styled.div`
display: flex;
flex:5;
`;

const Divide2 = styled.div`
display: flex;
flex:5;
`;

const Images = styled.img`
width: 100%;
height: 100%;
`;

const Division = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 200px;
`;


const Signin = ({ darkMode, setDarkMode }) => {
    const navigate = useNavigate();
    const [sapid, setSapid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("/auth/signin", { sapid, email, password });
            // console.log(res.data);
            dispatch(loginSuccess(res.data));
            if (res.data.typeofuser === "teacher") {
                navigate("/teacher");
            }
            if (res.data.typeofuser === "student") {
                navigate('/student');
            }
            if (res.data.typeofuser === "parent") {
                navigate('/parent');
            }
        } catch (err) {
            dispatch(loginFailure());
        }
    };





    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
        
        <Divide2>
        <Header><ThemeSwitcher>{darkMode ? <BsMoon size={30} onClick={() => { setDarkMode(!darkMode) }} /> : <BsSun size={30} onClick={() => { setDarkMode(!darkMode) }} />}</ThemeSwitcher></Header>
            <Division>           
            {darkMode ? <Images src={logindark} alt="logo" /> : <Images src={loginwhite} alt="logo" />}
            </Division>
            </Divide2>
            <Divide1>
            <div>
            <Wrapper><Title>WELCOME TO ANALYTIX!</Title>
                <SubTitle> Login Here (Only for members)</SubTitle>
                <Tags>
                <Input placeholder="sapid" onChange={e => setSapid(e.target.value)} />
                <Inputicon><AiOutlineProfile color='black' /></Inputicon>
                </Tags>
                <Tags>
                <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
                <Inputicon><AiOutlineMail color='black' /></Inputicon>
                </Tags>
                <Tags>
                <Input type={passwordShown ? "text" : "password"} placeholder="password" onChange={e => setPassword(e.target.value)} />
                {passwordShown ? <Inputicon><AiOutlineEye onClick={togglePassword} color='black' /></Inputicon> : <Inputicon><AiOutlineEyeInvisible color='black' onClick={ togglePassword} /></Inputicon>}
                </Tags>
                <Button onClick={handleLogin}>LOGIN
                <Icon><RiLoginBoxLine size={20} /></Icon>
                </Button>
            </Wrapper>
            </div>
            </Divide1>
            

        </Container>
        </ThemeProvider>
    )
}

export default Signin