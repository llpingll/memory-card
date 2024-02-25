import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <Image src={logo} alt="logo"></Image>
      </HeaderDiv>
      <Line>
        <Circle size="60px" borderThickness="6px">
          <Circle size="30px" borderThickness="4px" />
        </Circle>
      </Line>
    </>
  );
};

const HeaderDiv = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.pokeballRed};
`;

const Image = styled.img`
  width: 700px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border: ${({ borderThickness }) => borderThickness}
    ${({ theme }) => theme.colors.dark} solid;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
`;

export default Header;
