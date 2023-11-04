import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/ThemeReducer";
import toDoReducer from "./reducers/ToDoReducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
    toDos: toDoReducer,
  },
});
