//コンポーネントのリファクタリング

import { useState } from "react";
import AnimalList from "./components/animallist";
import AnimalFirter from "./components/AnimalFirter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });
  return (
    <>
      <AnimalFirter firterState={[firterVal, setFilterVal]} />
      <AnimalList animals={animals} />
    </>
  );
};

export default Example;
