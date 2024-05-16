const Hello = (props) => {
  // props.name = "Bob";読み取り専用だから変更できない
  console.log(props.name);
  const name = "Tom"; //Byeに渡す方法は基本駅にはない
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
