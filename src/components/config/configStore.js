import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";

// rootReducer안에 꼭 modules 추가
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
