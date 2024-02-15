import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <Text>||Ping|| © 2024</Text>
      <Icon></Icon>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  height: 30px;
`;

const Text = styled.p``;

const Icon = styled.a``;

export default Footer;
