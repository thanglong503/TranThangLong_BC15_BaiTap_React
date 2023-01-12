import React, { Component } from "react";
import Item from "./Item";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
