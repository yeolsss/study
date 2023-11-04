import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/ThemeReducer";
import toDoReducer from "./reducers/ToDoReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    toDos: toDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
