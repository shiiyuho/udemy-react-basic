import Animalitem from "./Animalitem";

const AnimalList = (animals) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません</h3>;
  }

  return (
    <ul>
      {animals.map((animal) => {
        return <Animalitem animal={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
