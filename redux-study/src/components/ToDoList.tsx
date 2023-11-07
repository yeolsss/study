import React from "react";
import { IToDo, selectToDos } from "../reducers/ToDoReducer";
import { useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";
import styled from "styled-components";

function ToDoList() {
  const toDoList = useSelector(selectToDos);
  const [unDoneList, doneList] = toDoList.reduce(
    (acc: [IToDo[], IToDo[]], cus: IToDo) => {
      acc[cus.isDone ? 1 : 0].push(cus);
      return acc;
    },
    [[], []],
  );

  return (
    <Main>
      <ToDoSection>
        <h1>🔥ToDo List🔥</h1>
        <ToDoCards>
          {unDoneList.length <= 0 ? (
            <p>등록된 ToDo가 없습니다.</p>
          ) : (
            unDoneList.map((todo: IToDo) => (
              <ToDoCard key={todo.id} todo={todo} />
            ))
          )}
        </ToDoCards>
      </ToDoSection>
      {doneList.length > 0 && (
        <ToDoSection>
          <h1>☠️Done List☠️</h1>
          <ToDoCards>
            {doneList.map((todo: IToDo) => (
              <ToDoCard key={todo.id} todo={todo} />
            ))}
          </ToDoCards>
        </ToDoSection>
      )}
    </Main>
  );
}
const Main = styled.main`
  margin-bottom: 10rem;
`;
const ToDoSection = styled.section`
  margin-top: 10rem;
  font-size: 2.4rem;

  > h1 {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;
const ToDoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30%);
  gap: 2rem;
`;

export default ToDoList;
