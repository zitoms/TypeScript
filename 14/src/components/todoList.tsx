import React from "react";

function TodoList() {
  const todos = [{ id: "t1", text: "Finished the cource" }];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
