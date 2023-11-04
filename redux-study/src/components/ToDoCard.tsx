import React from "react";
import { isDoneToggled, IToDo, toDoRemoved } from "../reducers/ToDoReducer";
import styled from "styled-components";
import { useDispatch } from "react-redux";

interface IBtnProps {
  btnType: BtnType;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

enum BtnType {
  DONE = 0,
  CANCEL = 1,
  DELETE = 2,
}
function ToDoCard({ todo }: { todo: IToDo }) {
  const dispatch = useDispatch();
  const handlerOnClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const { type } = target.dataset;
    const parentNode = target?.parentNode as HTMLElement;
    const { id: toDoId } = parentNode.dataset;
    // 완료 처리 및 취소 처리
    if (type === "0" || type === "1") {
      dispatch(isDoneToggled({ id: toDoId }));
      return;
    }
    // 삭제 처리
    if (type === "2") {
      dispatch(toDoRemoved({ id: toDoId }));
      return;
    }
  };
  return (
    <ToDoCardWrapper>
      <Title>{todo.title}</Title>
      <ToDo>{todo.toDo}</ToDo>
      <ButtonWrapper data-id={todo.id.toString()}>
        <Button
          btnType={todo.isDone ? BtnType.CANCEL : BtnType.DONE}
          handler={handlerOnClick}
        />
        <Button btnType={BtnType.DELETE} handler={handlerOnClick} />
      </ButtonWrapper>
    </ToDoCardWrapper>
  );
}

const ToDoCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 35rem;
  min-height: 30rem;
  height: auto;
  box-sizing: border-box;
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  border: 0.65rem solid var(--input-border-color);
  transition: border-color var(--transition-duration) ease-in;

  &:hover {
    border-color: var(--accent-color);
  }

  &::after {
    content: "";
    height: 5rem;
  }
`;

const Title = styled.h1`
  vertical-align: middle;
  width: 100%;
  padding: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
  letter-spacing: 0.1rem;
  box-sizing: border-box;
`;

const ToDo = styled.p`
  font-size: 1.6rem;
  max-height: 20rem;
  word-wrap: break-word;
  letter-spacing: 0.15rem;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  > button {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--main-text-color);
    width: 7rem;
    padding: 1.2rem;
    border: 0.3rem solid var(--input-border-color);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    transition: background-color var(--transition-duration) ease-is;

    &:first-child {
      margin-right: 1rem;

      &:hover {
        background-color: var(--accent-color);
      }
    }

    &:last-child {
      &:hover {
        background-color: var(--input-border-error-color);
      }
    }
  }
`;

export default ToDoCard;

const Button = ({ btnType, handler }: IBtnProps) => {
  return (
    <button data-type={btnType} onClick={handler}>
      {btnType === 0 ? "완료" : btnType === 1 ? "취소" : "삭제"}
    </button>
  );
};
