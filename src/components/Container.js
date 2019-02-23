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

        <div className="ui right action left icon input">
  <i className="search icon"></i>
  <input type="text" placeholder="Search"/>
  <div className="ui basic floating dropdown button">
    <div className="text">This Page</div>
    <i className="dropdown icon"></i>
    <div className="menu">
      <div className="item">This Organization</div>
      <div className="item">Entire Site</div>
    </div>
  </div>
</div>


        <div className="ui icon input">
          <input type="text" placeholder="Search by Name..." onChange={this.consoleLog}/>
          <i className="search icon"></i>
        </div>
      <select value={this.state.filterChoice} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>



        <div className="ui four cards">
          {this.formatHogsToTiles()}
        </div>



      </div>
    )
  }
}
