import styled from "styled-components";

const Card = ({ pokemon, playRound }) => {
  return (
    <CardContainer
      onClick={() => {
        playRound(pokemon);
      }}
    >
      <Image src={pokemon.sprite}></Image>
      <Name>{pokemon.name}</Name>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.3s;
  cursor: pointer;
  /* boxshadow */

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  padding: 0.5rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Name = styled.p`
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export default Card;
