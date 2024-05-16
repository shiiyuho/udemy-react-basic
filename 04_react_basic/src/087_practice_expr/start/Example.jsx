const title = "Expression";
const array = ["item1", "item2", "item3"];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = "upperCaseText";

const Example = () => {
  return (
    <>
      <h3>Hello JSX</h3>
      {/*文字列を大文字に*/}
      <h3>{upperCaseText.toUpperCase()}</h3>
      {}
      <h3>{"Hello " + title}</h3>
      {}
      <h3>{array}</h3>
      {}
      <h3>{fn("Hello")}</h3>
    </>
  );
};

export default Example;
