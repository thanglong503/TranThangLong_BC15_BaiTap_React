import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgCar: "./img/CarBasic/products/black-car.jpg",
  };

  changeColor = (color) => {
    this.setState({
      imgCar: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <img
              src={this.state.imgCar}
              alt="black-car"
              className="w-100"
              style={{ borderRadius: "5px" }}
            />
          </div>

          <ul className="col-md-4" style={{ listStyle: "none" }}>
            <li className="h-25">
              <button
                className="btn btn-danger w-25 r"
                onClick={() => {
                  this.changeColor("red");
                }}
              >
                Red
              </button>
            </li>
            <li className="h-25">
              <button
                className="btn bg-dark text-white  w-25"
                onClick={() => {
                  this.changeColor("black");
                }}
              >
                Black
              </button>
            </li>
            <li className="h-25">
              <button
                className="btn btn-default  w-25"
                style={{ backgroundColor: "#eee" }}
                onClick={() => {
                  this.changeColor("silver");
                }}
              >
                Silver
              </button>
            </li>
            <li className="h-25">
              <button
                className="btn  w-25"
                style={{ backgroundColor: "gray", color: "#000" }}
                onClick={() => {
                  this.changeColor("steel");
                }}
              >
                Steel
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
