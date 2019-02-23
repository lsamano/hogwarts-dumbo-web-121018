import React from 'react';

class Filter extends React.Component {
  render() {
    return(
      <div className="ui form">
    <div className="inline field">
      <div className="ui checkbox">
        <input type="checkbox" tabIndex="0" className="hidden"/>
        <label>Checkbox</label>
      </div>
    </div>
    <div className="inline field">
      <div className="ui slider checkbox">
        <input type="checkbox" tabIndex="0" className="hidden"/>
        <label>Slider</label>
      </div>
      <label></label>
    </div>
    <div className="inline field">
      <div className="ui toggle checkbox">
        <input type="checkbox" tabIndex="0" checked={this.props.checked} onChange={this.props.handleFilterToggle}/>
        <label>Toggle</label>
      </div>
    </div>
  </div>
    )
  }
}

export default Filter
