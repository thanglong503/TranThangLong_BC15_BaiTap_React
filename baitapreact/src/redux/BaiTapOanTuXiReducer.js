const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/gameOanTuXi/keo.png",
      datCuoc: true,
    },
    {
      ma: "bua",
      hinhAnh: "./img/gameOanTuXi/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/gameOanTuXi/bao.png",
      datCuoc: false,
    },
  ],
  ketQua: "I love u 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/gameOanTuXi/keo.png",
  },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //reset gia tri datCuoc ve false
      let mangCuocUpDate = [...state.mangDatCuoc];
      mangCuocUpDate = mangCuocUpDate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpDate;
      console.log("mangcuocUpDate ", mangCuocUpDate);
      console.log(action);
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "hoà, thử lại nha ! ";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua sml luôn !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, luv 3k !";
          }
          break;

        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "hoà, thử lại nha ! ";
          } else if (computer.ma === "bao") {
            state.ketQua = "thua sml luôn !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, 3000 !!!";
          }
          break;

        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "hoà, thử lại nha ! ";
          } else if (computer.ma === "keo") {
            state.ketQua = "thua sml luôn !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, 3000 !!!";
          }
          break;
        default:
          state.soBanThang += 1;
          state.ketQua = "I'm iron man, 3000 !!!";
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
