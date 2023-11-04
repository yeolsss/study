import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export interface IToDo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

class ToDo implements IToDo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  constructor(title: string, content: string) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
    this.isDone = false;
  }
}

const TO_DO_KEY = "toDos";
const toDoList = localStorage.getItem(TO_DO_KEY);
const initialState = toDoList ? JSON.parse(toDoList) : [];

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState,
  reducers: {
    toDoAdded: (state, action) => {
      const toDo = new ToDo(action.payload.title, action.payload.content);
      const newToDos = [toDo, ...state];
      localStorage.setItem(TO_DO_KEY, JSON.stringify(newToDos));
      return newToDos;
    },
    toDoRemoved: (state, action) => {},
    isDoneToggled: (state, action) => {},
  },
});

export const { toDoAdded } = toDoSlice.actions;

export const selectToDos = (state: RootState<any, any, any>) => state.toDos;

export default toDoSlice.reducer;
