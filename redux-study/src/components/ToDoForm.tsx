import React, { useRef, useState } from "react";
import { IValidData, resetState, validData } from "../common/util";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toDoAdded } from "../reducers/ToDoReducer";

// interface
interface IInputProps {
  type: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refData: React.RefObject<HTMLInputElement>;
  placeholder: string;
  isError: boolean;
}

function ToDoForm() {
  const [title, setTitle] = useState<string>("");
  const [toDo, setToDo] = useState<string>("");

  const titleRef = useRef<HTMLInputElement>(null);
  const toDoRef = useRef<HTMLInputElement>(null);

  const [titleError, setTitleError] = useState<boolean>(false);
  const [toDoError, setToDoError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError(false);
  };

  const handleOnChangeToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
    setToDoError(false);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleObj: IValidData = {
      value: title,
      msg: "제목을 입력해 주세요.",
      ref: titleRef,
      setError: setTitleError,
    };
    const toDoObj: IValidData = {
      value: toDo,
      msg: "To Do를 입력해 주세요.",
      ref: toDoRef,
      setError: setToDoError,
    };
    if (validData(titleObj) || validData(toDoObj)) return;

    dispatch(toDoAdded({ title, toDo }));
    resetState(setTitle, setToDo);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type={"text"}
        value={title}
        handler={handleOnChangeTitle}
        refData={titleRef}
        placeholder={"제목을 입력해 주세요."}
        isError={titleError}
      />
      <Input
        type={"text"}
        value={toDo}
        handler={handleOnChangeToDo}
        refData={toDoRef}
        placeholder={"To Do를 입력해 주세요."}
        isError={toDoError}
      />
      <SubmitButton type="submit">ADD</SubmitButton>
    </Form>
  );
}
export default ToDoForm;

const Form = styled.form`
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & :nth-child(2) {
    margin: 0 5rem;
    width: 50rem;
  }
`;

const InputElement = styled.input<{ $isError: boolean }>`
  background-color: var(--color-bg);
  color: var(--text-color);
  border: 1.5rem solid var(--input-border-color);
  font-size: 2.4rem;
  border-radius: var(--border-radius);
  padding: 1rem 2rem;
  box-sizing: border-box;
  width: 30rem;
  letter-spacing: 0.1rem;

  transition:
    border-color var(--transition-duration) ease-in-out,
    color var(--transition-duration) ease-in;

  &:focus {
    border-color: ${({ $isError }) =>
      $isError
        ? "var(--input-border-error-color)"
        : "var(--input-border-focus-color)"};
  }

  &::placeholder {
    font-size: inherit;
    color: var(--input-border-focus-color);
  }
`;

const SubmitButton = styled.button`
  font-size: 2.4rem;
  font-weight: bold;
  width: 10rem;
  color: var(--text-color);
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  background-color: var(--input-border-color);
  border-radius: var(--border-radius);
  transition:
    background-color var(--transition-duration) ease-in,
    color var(--transition-duration) ease-in;

  &:hover {
    background-color: var(--accent-color);
  }
`;

const Input = ({ ...props }: IInputProps) => {
  return (
    <InputElement
      type={props.type}
      value={props.value}
      onChange={props.handler}
      ref={props.refData}
      placeholder={props.placeholder}
      $isError={props.isError}
    />
  );
};
