import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderDiv>
      <Image src={logo}></Image>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div``;

const Image = styled.img`
  width: 700px;
`;

export default Header;
