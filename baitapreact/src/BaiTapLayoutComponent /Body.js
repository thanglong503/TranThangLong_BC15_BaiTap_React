import React, { Component } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ListItem />
      </div>
    );
  }
}
