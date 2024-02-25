import styled from "styled-components";
import Card from "./Card";

const Cardsgrid = ({ pokemons, playRound }) => {
  return (
    <GridContainer>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id}></Card>
        ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Cardsgrid;
