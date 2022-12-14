import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "40px")};
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
  top:0;
  position: sticky;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  color : ${({ theme }) => theme.text};
  gap : 10px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content:space-between;
  padding-right: 20px;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color:${({ theme }) => theme.text};
  font-size:20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color:${({ theme }) => theme.text};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
color:${({ theme }) => theme.text};
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  color:${({ theme }) => theme.text};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;