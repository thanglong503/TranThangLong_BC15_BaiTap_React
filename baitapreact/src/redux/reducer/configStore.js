import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import BaiTapBookingTicketReducer from "./BaiTapBookingTicketReducer";

const rootReducer = combineReducers({
  //Noi chua toan bo state cua ung dunng
  BaiTapOanTuXiReducer,
  BaiTapBookingTicketReducer,
});

export const store = createStore(rootReducer);
