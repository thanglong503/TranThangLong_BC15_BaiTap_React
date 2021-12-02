import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTicketType";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const HUYGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
