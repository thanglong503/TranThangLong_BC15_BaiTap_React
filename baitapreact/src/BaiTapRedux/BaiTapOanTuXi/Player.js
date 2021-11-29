import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    console.log("mangDatCuoc ", this.props);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-2"
            width={75}
            height={75}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc == true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc == true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          style={{ width: 150, height: 150, marginTop: 10, zIndex: 1 }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //Xet gia tri cuoc them vien cho item duoc chon
            let bg = {};
            if (item.datCuoc) {
              bg = { background: "white" };
            }

            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  className="btnItemn"
                  style={bg}
                >
                  <img
                    width={35}
                    height={35}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangDatCuoc: rootReducer.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
