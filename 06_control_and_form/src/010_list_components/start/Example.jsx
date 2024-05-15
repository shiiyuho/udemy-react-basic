//for文を使った書き方
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>animals{0}</li>
        <li>animals{1}</li>
        <li>animals{2}</li> */}
        {animalList}
      </ul>
    </>
  );
};

export default Example;

//mapを使った書き方
const animals2 = ["Dog", "Cat", "Rat"];

const Example2 = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => <li>Hello,{animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>animals{0}</li>
        <li>animals{1}</li>
        <li>animals{2}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {animals.map((animal) => (
          <li>Hello,{animal}</li>
        ))}
      </ul>
    </>
  );
};
