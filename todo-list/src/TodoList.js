import React, { useState } from "react";

const TodoList = ({
  todos,
  completeTodo,
  deleteTodo,
  editTodo,
  editingIndex,
  setEditingIndex,
}) => {
  const [editText, setEditText] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditText(todos[index].text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (index) => {
    editTodo(index, editText);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`todo ${todo.isCompleted ? "completed" : ""}`}
        >
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={handleEditChange}
                onBlur={() => handleEditSubmit(index)}
                onKeyDown={(e) => e.key === "Enter" && handleEditSubmit(index)}
              />
              <button onClick={() => handleEditSubmit(index)}>Save</button>
            </>
          ) : (
            <>
              <span onClick={() => completeTodo(index)}>{todo.text}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
