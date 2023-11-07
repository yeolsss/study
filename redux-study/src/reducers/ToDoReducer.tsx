import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IToDo {
  id: number;
  title: string;
  toDo: string;
  isDone: boolean;
}

class ToDo  {
  id: number;
  title: string;
  toDo: string;
  isDone: boolean;
  constructor(title: string, content: string) {
    this.id = Date.now();
    this.title = title;
    this.toDo = content;
    this.isDone = false;
  }
}

const TO_DO_KEY = "toDoList";
const toDoList = localStorage.getItem(TO_DO_KEY);
const initialState = toDoList ? JSON.parse(toDoList) : [];

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState,
  reducers: {
    toDoAdded: (state, action) => {
      const toDo = new ToDo(action.payload.title, action.payload.toDo);
      const newToDos = [toDo, ...state];
      localStorage.setItem(TO_DO_KEY, JSON.stringify(newToDos));
      return newToDos;
    },
    isDoneToggled: (state, action) => {
      const newTodos = state.map((toDo: IToDo) => {
        if (toDo.id === parseInt(action.payload.id)) {
          console.log(!toDo.isDone);
          toDo.isDone = !toDo.isDone;
        }
        return toDo;
      });
      localStorage.setItem(TO_DO_KEY, JSON.stringify(newTodos));
    },
    toDoRemoved: (state, action) => {
      const newTodos = state.filter(
        (toDo: IToDo) => toDo.id !== parseInt(action.payload.id),
      );
      localStorage.setItem(TO_DO_KEY, JSON.stringify(newTodos));
    },
  },
});

export const { toDoAdded, isDoneToggled, toDoRemoved } = toDoSlice.actions;

export const selectToDos = (state: RootState) => state.toDos;

export default toDoSlice.reducer;
