import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";

const rootReducer = combineReducers({
  //Noi chua toan bo state cua ung dunng
  BaiTapOanTuXiReducer,
});

export const store = createStore(rootReducer);
