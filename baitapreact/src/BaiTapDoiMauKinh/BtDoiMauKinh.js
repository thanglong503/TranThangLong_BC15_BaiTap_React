import React, { Component } from "react";
import styled from "./Style.module.css";

export default class BtDoiMauKinh extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassesClick: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesClick: newGlasses,
    });
  };

  renderListGlasses = () => {
    return this.dataGlasses.map((glassesItem, index) => {
      return (
        <div className={`col-md-2 `} key={index}>
          <a className={`w-100`} type="button" href="">
            <img
              className={`${styled.sizeImgGlasses} ${styled.imgGlassesBorder}`}
              src={`./img/${glassesItem.url}`}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                this.changeGlasses(glassesItem);
              }}
            />
          </a>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className={`${styled.backGroundSetting} ${styled.reset} ${styled.overlay}`}
        style={{ backgroundImage: "URL(/img/GlassesImage/background.jpg)" }}
      >
        {/* overlay  */}
        <div className={` ${styled.overlay}`}></div>

        {/* title  */}
        <div className={`${styled.bgColor} ${styled.title}`}>
          <h1 className={`${styled.textTitle}`}>try glasses app online</h1>
        </div>

        {/* model glasses  */}
        <div className={`${styled.settingModel} row`}>
          <div className="col-md-3"></div>
          <div className="col-md-2 p-0">
            <img
              className={`${styled.widthImgModel}`}
              style={{ position: "relative", height: "310px" }}
              src="./img/GlassesImage/model.jpg"
              alt=""
            />
            <img
              className={`${styled.positionGlasses}`}
              src={`./img/${this.state.glassesClick.url}`}
              alt=""
            />
            <div className={`${styled.positionDescription}`}>
              <div className={`${styled.backgrounDescription}`}>
                <h5 style={{ color: "cornflowerblue" }}>
                  {this.state.glassesClick.name}
                </h5>
                <p className={`${styled.textDescription}`}>
                  {this.state.glassesClick.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2 p-0">
            <img
              className={`${styled.widthImgModel}`}
              style={{ height: "310px" }}
              src="./img/GlassesImage/model.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3"></div>
        </div>

        {/* glasses try  */}
        <div className={`${styled.positionImgGlasses}`}>
          <div className={`row ${styled.listImgGlasses}`}>
            {this.renderListGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
