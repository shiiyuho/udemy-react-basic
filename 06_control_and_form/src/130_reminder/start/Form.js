import { useState } from "react";

const [enterdTodo, setEnterdTodo] = useState("");

const Form = (createTodo) => {
  const addTodo = (e) => {
    //無効か(「追加」ボタンを押してもページがリロードされなくなる)
    e - preventDefault();

    const inputVal = e.target.value;

    const newTodo = {
      id: Math.floor(Math.random() * le5),
      content: inputVal,
    };

    createTodo(newTodo);
    //下記により追加された値が初期化される
    setEnterdTodo("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enterdTodo}
          onChange={(e) => setEnterdTodo(e.target.value)}
        ></input>
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
