import React, { Component } from "react";
import "./style.css";

class Calculator extends Component {
  state = {
    p1: {
      x: 0,
      y: 0
    },
    p2: {
      x: 0,
      y: 0
    }
  };

  p1Update({ x, y }) {
    this.setState({
      p1: {
        x: x || this.state.p1.x,
        y: y || this.state.p1.y
      },
      p2: this.state.p2
    });
  }

  p2Update({ x, y }) {
    this.setState({
      p1: this.state.p1,
      p2: {
        x: x || this.state.p2.x,
        y: y || this.state.p2.y
      }
    });
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-value">
          <label className="Calculator-label" htmlFor="p1x">
            Point A – X:
          </label>
          <input
            className="Calculator-input"
            id="p1x"
            type="number"
            onInput={e => this.p1Update({ x: e.target.value })}
            value={this.state.p1.x}
          />
        </div>

        <div className="Calculator-value">
          <label className="Calculator-label" htmlFor="p1y">
            Point A – Y:
          </label>
          <input
            className="Calculator-input"
            id="p1y"
            type="number"
            onInput={e => this.p1Update({ y: e.target.value })}
            value={this.state.p1.y}
          />
        </div>

        <div className="Calculator-value">
          <label className="Calculator-label" htmlFor="p2x">
            Point B – X:
          </label>
          <input
            className="Calculator-input"
            id="p2x"
            type="number"
            onInput={e => this.p2Update({ x: e.target.value })}
            value={this.state.p2.x}
          />
        </div>

        <div className="Calculator-value">
          <label className="Calculator-label" htmlFor="p2y">
            Point B – Y:
          </label>
          <input
            className="Calculator-input"
            id="p2y"
            type="number"
            onInput={e => this.p2Update({ y: e.target.value })}
            value={this.state.p2.y}
          />
        </div>

        <h2 className="Calculator-result">
          {"Angle in degree: "}
          {(Math.atan2(
            this.state.p2.y - this.state.p1.y,
            this.state.p2.x - this.state.p1.x
          ) *
            180) /
            Math.PI}
          {"°"}
          <br />

          {"Angle in radian: "}

          {Math.atan2(
            this.state.p2.y - this.state.p1.y,
            this.state.p2.x - this.state.p1.x
          )}
          {" rad"}
        </h2>
      </div>
    );
  }
}

export default Calculator;
