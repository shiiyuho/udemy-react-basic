import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoApi from "../API/todo";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    todoApi.patch(newTodo).then((newTodo) => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    //更新文（upDate)
    todoApi.patch(newTodotodo).then(() => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };
  //DELETE文
  const complete = (todo) => {
    todoApi.delete(todo).then(() => {
      dispatch({ type: "todo/delete", todo });
    });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
