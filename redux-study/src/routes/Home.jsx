import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, dAddToDo, dDeleteToDo }) {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dAddToDo(text);
    setText("");
  };

  const handleDeleteTodo = (event) => {
    const toDoId = event.target.parentNode.dataset.id;
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dAddToDo: (text) => dispatch(actionCreators.addToDo(text)),
    dDeleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
