import React from 'react';
import Tile from './Tile';
import ArrangeBy from './ArrangeBy';
import hogs from '../porkers_data';

export default class Container extends React.Component {
  state = {
    hogs: hogs,
    filteredHogs: [...hogs],
    arrangeBy: "default",
    searchTerm: "",
    checked: false
  }

  handleFilterToggle = event => {
    this.setState({
      checked: !this.state.checked
    }, ()=> this.updateContainerFilter())
  }

  handleArrangeType = event => {
    let rearrangedHogs = this.rearrangeHogs(event.target.value)
    if (this.state.checked === true) {
      rearrangedHogs = rearrangedHogs.filter(hog => hog.greased === true)
    }
    this.setState({
      arrangeBy: event.target.value,
      filteredHogs: rearrangedHogs
    })
  }

  updateContainerFilter = () => {
    if (this.state.checked === true) {
      this.setState({
        filteredHogs: this.state.filteredHogs.filter(hog => hog.greased === true)
      })
    } else {
      this.setState({
        filteredHogs: this.rearrangeHogs(this.state.arrangeBy)
      })
    }
  }

  rearrangeHogs = (selectedType) => {
    const longJoke = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (selectedType === "name") {
      const newHogs =  [...this.state.hogs].sort((a, b) => a[selectedType].localeCompare(b[selectedType]));
      return newHogs
    } else if (selectedType === "weight") {
      return [...this.state.hogs].sort((a, b) => a[longJoke] - b[longJoke]);
    } else if (selectedType === "default") {
      return [...this.state.hogs]
    }
  }

  formatHogsToTiles = () => {
    return this.state.filteredHogs.map( (hog, index) => {
      return <Tile hog={hog} key={index}/>
    })
  }

  render() {
    return (
      <div>
        <ArrangeBy
          handleArrangeType={this.handleArrangeType}
          handleFilterToggle={this.handleFilterToggle}
          checked={this.state.checked}
          />
        <div className="ui four cards">
          {this.formatHogsToTiles()}
        </div>
      </div>
    )
  }
}
