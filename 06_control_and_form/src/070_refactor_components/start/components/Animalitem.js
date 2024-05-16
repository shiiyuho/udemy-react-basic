const Animalitem = ({ animal }) => {
  return (
    <li key={animal}>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );
};

export default Animalitem;
