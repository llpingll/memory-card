const shuffleCards = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

const capitalise1stLetter = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

export { shuffleCards, capitalise1stLetter };
