import Scoreboard from "./scoreboard/Scoreboard";
import styled from "styled-components";
import Cardsgrid from "./cards/Cardsgrid";
import { shuffleCards, capitalise1stLetter } from "../utilities";
import { useEffect, useState } from "react";

const Main = () => {
  const NumberOfPokemon = 12;
  const [pokemons, setPokemons] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      setPokemons(shuffleCards(await getPokemon()));
    };

    loadPokemon();
  }, []);

  const getPokemon = async () => {
    const pokemons = [];

    for (let i = 1; i <= NumberOfPokemon; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const pokemon = await response.json();
      const name = capitalise1stLetter(pokemon.name);
      const id = pokemon.id;
      const sprite = pokemon.sprites.front_default;

      pokemons.push({ name, id, sprite });
    }

    return pokemons;
  };

  const playRound = (pokemon) => {
    if (clickedPokemon.includes(pokemon)) {
      setClickedPokemon([]);
      setCurrentScore(0);
    } else {
      setClickedPokemon([...clickedPokemon, pokemon]);
      setCurrentScore((current) => current + 1);
      if (bestScore === currentScore) setBestScore(bestScore + 1);
    }
    setPokemons(shuffleCards(pokemons));
  };

  return (
    <MainContainer>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Cardsgrid pokemons={pokemons} playRound={playRound} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`;

export default Main;
