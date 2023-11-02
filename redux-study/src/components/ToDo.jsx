import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id, handleDeleteToDo }) {
  return (
    <li key={id} data-id={id.toString()}>
      <Link to={`${id}`}>
        {text}
        <button onClick={handleDeleteToDo}>삭제</button>
      </Link>
    </li>
  );
}
const mapDispatchProps = (dispatch, onwProps) => {
  return {
    handleDeleteToDo: () => dispatch(actionCreators.deleteToDo(onwProps.id)),
  };
};
export default connect(null, mapDispatchProps)(ToDo);
