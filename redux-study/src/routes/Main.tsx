import React from "react";
import Header from "../layout/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function Main() {
  return (
    <>
      <Header />
      <ToDoForm />
      <ToDoList />
    </>
  );
}

export default Main;
