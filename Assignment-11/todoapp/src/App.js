import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

// local storage
const getLocalStrorage = () => {
  let list = localStorage.getItem("task");
  if (list) {
    return JSON.parse(localStorage.getItem("task"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  //  for form inputs
  // const [list, setList] = useState([]);
  // to set var in local storage
  const [list, setList] = useState(getLocalStrorage());

  const [isEditing, setIsEditing] = useState(false);
  // to check whether user is editing task??
  const [editID, setEditId] = useState(null);
  // to target perticular task
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  // user action is reflection, it is object
  // bcoz for correct and wrong entry

  const handleSubmit = (e) => {
    e.preventDefault();
    // prvent the refresh after every render which is by default
    console.log(name);

    if (!name) {
      // display alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      //  how to deal edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          } else {
            return item;
          }
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "Task is Updated");
    } else {
      // show alert and create new todo in list
      showAlert(true, "success", "task added");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: show, type: type, msg: msg });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "task removed");
    setList(list.filter((item) => id !== item.id));
    // list has item with id not equal to passed id
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    console.log(specificItem);
    // we get single item of same id
    setName(specificItem.title);
    //for value at input box
    setEditId(id);
    setIsEditing(true);
  };

  const completeTodo = (id) => {
    // const specificItem = list.find((item) => item.id === id);
    // specificItem.Complete = !specificItem.Complete;
    // setList(list);

    const updatedTodo = list.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setList(updatedTodo);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <section className="section-center">
        <form action="" className="todo-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>ToDo Task List</h3>
          <div className="form-control">
            <input
              type="text"
              className="todo"
              placeholder="Enter the task"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="todo-container">
            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
              completeTodo={completeTodo}
            />
            {/* item as props  */}
            <button
              className="clear-btn"
              onClick={() => {
                showAlert(true, "danger", "No Tasks");
                setList([]);
              }}
            >
              clear all task
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
