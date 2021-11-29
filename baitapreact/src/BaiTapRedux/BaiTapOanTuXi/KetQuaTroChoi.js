import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng:{" "}
          <span className="text-danger">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Số bàn chơi:{" "}
          <span className="text-danger">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    ketQua: rootReducer.BaiTapOanTuXiReducer.ketQua,
    soBanThang: rootReducer.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: rootReducer.BaiTapOanTuXiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
