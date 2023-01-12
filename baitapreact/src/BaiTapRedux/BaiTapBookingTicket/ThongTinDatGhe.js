import React, { Component } from "react";
import { connect } from "react-redux";
import { HUYGheAction } from "../../redux/actions/BaiTapBookingTicketAction";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "25px", marginLeft: "15px" }}
          >
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span
            className="text-light"
            style={{ fontSize: "25px", marginLeft: "15px" }}
          >
            ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ margin: "0" }}></button>
          <span
            className="text-light"
            style={{ fontSize: "25px", marginLeft: "15px" }}
          >
            ghế chưa đặt
          </span>
        </div>
        <div className="mt-5 ">
          <table className="table " border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>số ghế </th>
                <th>giá </th>
                <th> huỷ</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr className="text-warning" key={index}>
                    <td className="align-middle">{gheDangDat.soGhe}</td>
                    <td className="align-middle">
                      {gheDangDat.gia.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          this.props.dispatch(HUYGheAction(gheDangDat.soGhe));
                        }}
                        className="text-danger btnCancle"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <td>Tổng: </td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat:
      rootReducer.BaiTapBookingTicketReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
