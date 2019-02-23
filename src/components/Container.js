import React from 'react';
import Tile from './Tile';
import hogs from '../porkers_data';

export default class Container extends React.Component {
  state = {
    hogs: hogs,
    filteredHogs: hogs,
    filterChoice: "coconut"
  }

  formatHogsToTiles = () => {
    return this.state.filteredHogs.map( (hog, index) => {
      return <Tile hog={hog} key={index}/>
    })
  }

  handleChange = event => {
    // debugger
    this.setState({
      filterChoice: event.target.value
    })
  }

  consoleLog = event => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="ui grid container">
      <input type="text" placeholder="Search by Name..." onChange={this.consoleLog}/>
      <select value={this.state.filterChoice} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
        <div className="ui three cards">
          {this.formatHogsToTiles()}
        </div>
      </div>
    )
  }
}
