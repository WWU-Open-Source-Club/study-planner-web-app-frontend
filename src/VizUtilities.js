/*VizUtilities -- provides simple visual features
that will be reused by multiple components*/
import React from 'react';
export {SlideSwitch};


class SlideSwitch extends React.Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" onClick={() => this.props.onClick()} />
        <span className="slider round"></span>
      </label>
    )
  }
}
