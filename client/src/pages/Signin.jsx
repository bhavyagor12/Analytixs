import axios from 'axios';
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess, loginStart } from "../redux/userSlice";
import { Navigate, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineProfile, AiOutlineMail} from 'react-icons/ai';



const Container = styled.div`
display: flex;
/* flex-direction: column; */
/* background: linear-gradient(rgba(255, 255, 255, 0.1),
rgba(255, 255, 255, 0.3)), */
/* url('https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=2000'); */
height: 100vh;
align-items: center;
justify-content: center;
color: ${({ theme }) => theme.text};
background-color: black;
`;
const Wrapper = styled.div`
background-color: white;
display: flex;
align-items: center;
flex-direction:column;
padding:50px 70px;
border:2px solid ${({ theme }) => theme.soft};
gap: 10px;
`;

const Title = styled.h1`
font-size: 48px;
`;

const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;
/* @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap'); */
/* font-family: 'Lora', serif; */
`;
const Input = styled.input`
border:none;
border-radius:3px;
background-color: transparent;

outline:none;
color: ${({ theme }) => theme.text}
`;
const Tags = styled.div`
border:1px solid ${({ theme }) => theme.soft};
border-radius:3px;
background-color: transparent;
padding:15px;
outline:none;
margin-bottom:5px;
color: ${({ theme }) => theme.text}
`;

const Button = styled.button`
border-radius: 3px;
border:none;
padding:10px 20px;
font-weight: 500;
cursor:pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`;

const Divide1 = styled.div`
display: flex;
/* flex-direction: row; */
flex:5;
`;

const Divide2 = styled.div`
display: flex;
/* background-color: black; */
/* flex-direction: row; */
flex:5;
`;

const Signin = () => {
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

        <Container>
            <Divide1>
            <div>
            <Wrapper><Title>Login</Title>
                <SubTitle>WELCOME TO SterLearn </SubTitle>
                <Tags>
                <Input placeholder="sapid" onChange={e => setSapid(e.target.value)} />
                <AiOutlineProfile />
                </Tags>
                <Tags>
                <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
                <AiOutlineMail />
                </Tags>
                <Tags>
                <Input type={passwordShown ? "text" : "password"} placeholder="password" onChange={e => setPassword(e.target.value)} />
                {passwordShown ? <AiOutlineEye onClick={togglePassword} /> : <AiOutlineEyeInvisible onClick={ togglePassword} />}
                </Tags>
                <Button onClick={handleLogin}>Sign in</Button>
                
            </Wrapper>
            </div>
            </Divide1>
            <Divide2>
            <div>hello</div>
            </Divide2>

        </Container>

    )
}

export default Signin