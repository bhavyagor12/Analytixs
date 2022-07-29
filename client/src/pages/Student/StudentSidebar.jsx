import React from 'react'
import styled from 'styled-components';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineQuestionCircle, AiOutlineTeam, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { MdAssignment } from 'react-icons/md';
import { RiFeedbackFill } from 'react-icons/ri';
import { VscColorMode } from 'react-icons/vsc'

const StudentSidebar = ({ darkMode, setDarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/student" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo >
                        Student Portal
                    </Logo>
                </Link>
                <Link to="/student" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <AiOutlineHome />
                        Dashboard
                    </Item>
                </Link>
                <Link to="/parent/report" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <AiOutlineSearch />
                        Report
                    </Item>
                </Link>
                <Link to="/parent/teams" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <AiOutlineTeam />
                        Teams
                    </Item>
                </Link>
                <Hr />
                <Link to="/student/assignments" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <MdAssignment />
                        Assignments
                    </Item>
                </Link>
                <Link to="/student/submitassignments" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <MdAssignment />
                        Submit Assignments
                    </Item>
                </Link>
                <Link to="/student/feedback" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <RiFeedbackFill />
                        Feedback
                    </Item>
                </Link>
                <Link to="/student/queries" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <AiOutlineQuestionCircle />
                        Queries
                    </Item>
                </Link>
                <Hr />
                <Link to="/student/calender" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item >
                        <AiOutlineCalendar />
                        Calender
                    </Item>
                </Link>
                <Button>Log out</Button><Hr />
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <VscColorMode />
                    {darkMode ? "Light" : "Dark"}
                </Item>
            </Wrapper></Container>

    )
}

export default StudentSidebar

const Container = styled.div`
flex:1;
background-color:${({ theme }) => theme.bg};
color:${({ theme }) => theme.text};
display: flex;
flex-direction: column;
height: 100vh;
position: sticky;
`
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight:bold;
 margin-bottom: 25px;
 
`;
const Item = styled.div`
display: flex;
align-items: center;
cursor: pointer;
gap: 20px;
padding: 7.5px 0;
&:hover{
  background-color: ${({ theme }) => theme.soft}
}
&:active{   
    background-color: ${({ theme }) => theme.span}
}
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`
const Img = styled.img`
height: 25px;
`;

const Button = styled.button`
background-color: ${({ theme }) => theme.span}; /* Green */
  border: none;
  color: ${({ theme }) => theme.soft};
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
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