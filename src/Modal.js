import React from "react";
import "./App.css";

export default function Modal() {
  return (
    <div id="myModal" className="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
      
    </div>
  );
}
// {isCheck ? (saveId === todo.id ? "" : "") : todo.isComplete ? (
//   "hihi"
// ) : (
//   "hehe"
// )}