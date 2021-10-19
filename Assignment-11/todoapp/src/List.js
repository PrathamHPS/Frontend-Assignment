import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem, completeTodo }) => {
  return (
    <div className="todo-list">
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article
            key={id}
            className={item.isComplete ? "todo-item complete" : "todo-item"}
          >
            <p
              className="title"
              onClick={() => {
                completeTodo(id);
              }}
              key={id}
            >
              {title}
            </p>
            <div className="btn-container">
              <button
                className="edit-btn"
                onClick={() => {
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
