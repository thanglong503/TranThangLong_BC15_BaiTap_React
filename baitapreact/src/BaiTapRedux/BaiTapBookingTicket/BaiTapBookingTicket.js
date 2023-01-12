import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../Data/danhSachGhe.json";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bgImg bookingMovie">
        <div className="bgOverlay">
          <div className="container-fluid">
            <div className="row mt-2">
              <div className="col-8 text-center">
                <h1 className="text-warning">BÀI TẬP ĐẶT VÉ XEM PHIM </h1>
                <div className="text-light mt-2" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>

                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen container"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <h1 className="text-light mt-2" style={{ fontSize: "30px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
