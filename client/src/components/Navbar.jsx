import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdOutlineWavingHand, MdOutlineNotifications } from "react-icons/md";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
} from "./Navbar.style";
// import LogoImg from "../assets/logo.png";
const Search = styled.div`
  margin:auto;
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius:3px;

`;
const Input = styled.input`
  border: none;
  background-color:transparent;
  width: 100%;
  outline: none;
  color:${({ theme }) => theme.text};
`;
const Text = styled.div`
font-size: 30px;
font-weight: 600;
span{
    color: ${({ theme }) => theme.span};
}
`
const Icons = styled.div`
 border-radius: 50%;
 background-color:${({ theme }) => theme.soft} ;
 padding: 10px;
 `;

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const { user } = useSelector(state => state.user);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Text>Hello,<span> Chamber! </span> </Text>
                    <Icons><MdOutlineWavingHand size={30} />    </Icons>
                </LeftContainer>
                <RightContainer>
                    <Search>
                        <Input
                            placeholder="Search"
                        />
                        <MdSearch size={20} />
                    </Search>
                    <Icons><MdOutlineNotifications size={30} /></Icons>
                    <Icons><AiOutlineSetting size={30} /></Icons>
                </RightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;