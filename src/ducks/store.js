import { createStore, compose } from "redux";
import animalReducer from "./animalReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(animalReducer, composeEnhancers());

export default store;
