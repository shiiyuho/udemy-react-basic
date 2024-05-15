const List = ({ todos, deleteTodo }) => {
  //completeの定義
  const complete = (id) => {};
  deleteTodo(id);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={Todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
