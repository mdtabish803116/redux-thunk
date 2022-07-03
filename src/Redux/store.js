import {legacy_createStore as createStore , combineReducers , applyMiddleware} from "redux";
import {registerReducer} from "./Register/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
      registerUser : registerReducer
})


export const store = createStore(rootReducer , applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState());
  })