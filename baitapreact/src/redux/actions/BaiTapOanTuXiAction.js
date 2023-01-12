import { CHON_KEO_BUA_BAO } from "../types/BaiTapOanTuXiType";

export const datCuoc = (maCuoc) => {
  return {
    type: CHON_KEO_BUA_BAO,
    maCuoc,
  };
};
