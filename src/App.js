/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import img from "./outline_delete_black_24dp.png";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import imgDone from "./done-icon-18.jpg";
import imgNotDone from "./No-Symbol.svg";

const todolist = {
  id: 1,
  name: "quet nha",
  deadline: dayjs(Date.now()).format("DD-MM-YYYY"),
  isComplete: false,
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([todolist]);
  const [isCheck, setIsCheck] = useState(false);
  const [saveId, setSaveId] = useState();
  const [hide, setHide] = useState(false);

  function handleInput(e) {
    setText(e.target.value);
  }
  function addTodo() {
    const addNewTodo = {
      id: todoList.length + 1,
      name: text,
      deadline: dayjs(Date.now()).format("DD-MM-YYYY"),
      isComplete: false,
    };
    setTodoList([...todoList, addNewTodo]);
    setText("");
  }
  const handleCheck = (id) => {
    setSaveId(id);
    setIsCheck(!isCheck);
  };
  // const done = (id) => {
  //   const filterTodo = todoList.filter((todo) => todo.id === id);
  //   console.log(filterTodo);
  //   filterTodo.map((todo) => {
  //     todo.isComplete = true;
  //   });
  // };
  // const notDone = (id) => {
  //   const filterTodo = todoList.filter((todo) => todo.id === id);
  //   console.log(filterTodo);
  //   filterTodo.map((todo) => {
  //     todo.isComplete = false;
  //   });
  // };

  return (
    <div className="App">
      <div className="card">
        <h1>Todo App</h1>
        <div className="card_submit">
          <h1>Tasks</h1>
          <button
            id="myBtn"
            className="card_submit_button"
            onClick={() => setIsOpen(true)}
          >
            <span>+</span>
          </button>
          <div
            id="myModal"
            className="modal"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            <div className="modal-content">
              <span className="close" onClick={() => setIsOpen(false)}>
                &times;
              </span>
              <div style={{ display: "flex" }}>
                <input value={text} onChange={handleInput}></input>
                <button
                  className="card_submit_button card_submit_button--second "
                  onClick={addTodo}
                >
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="title_card">
          <p style={{ width: "25%", textAlign: "start" }}>Task name</p>
          <p style={{ width: "25%", textAlign: "center" }}>Deadline</p>
          <p style={{ width: "25%", textAlign: "center" }}>Status</p>
          <p style={{ width: "25%", textAlign: "end" }}>Working time</p>
        </div>
        {todoList.map((todo) => {
          return (
            <div
              key={todo.id}
              className="title_card"
              style={{ background: "#fff" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  width: "25%",
                }}
              >
                <input
                  style={{ display: "flex" }}
                  type={"checkbox"}
                  onClick={() => {
                    handleCheck(todo.id);
                  }}
                ></input>
                <p style={{ textAlign: "start", overflow: "hidden" }}>
                  {todo.name}
                </p>
              </div>
              <p style={{ width: "25%", textAlign: "center" }}>
                {todo.deadline}
              </p>
              <div style={{ width: "25%", textAlign: "center" }}>
                {saveId === todo.id ? (
                  <div className="img">
                    <div
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={imgDone}
                      ></img>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={imgNotDone}
                      ></img>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <p style={{ width: "25%", textAlign: "end" }}>Working time</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
