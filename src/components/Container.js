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
    checked: false,
    searchTerm: ""
  }

  filterbySearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    }, this.filterTheHogsViaSearch)
  }

  filterTheHogsViaSearch = () => {
    let rearrangedHogs = this.rearrangeHogs(this.state.arrangeBy)
    if (this.state.checked === true) {
      rearrangedHogs = rearrangedHogs.filter(hog => hog.greased === true)
    }
    rearrangedHogs = rearrangedHogs.filter(hog => hog.name.includes(this.state.searchTerm))
    this.setState({
      filteredHogs: rearrangedHogs
    })
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
    rearrangedHogs = rearrangedHogs.filter(hog => hog.name.includes(this.state.searchTerm))
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
      let rearrangedHogs = this.rearrangeHogs(this.state.arrangeBy)
      .filter(hog => hog.name.includes(this.state.searchTerm))

      this.setState({
        filteredHogs: rearrangedHogs
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

  dontDoTheThing = event => {
    event.preventDefault()
    debugger
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
          filterbySearchTerm={this.filterbySearchTerm}
          searchTerm={this.state.searchTerm}
          dontDoTheThing={this.dontDoTheThing}
          />
        <div className="ui four cards">
          {this.formatHogsToTiles()}
        </div>
      </div>
    )
  }
}
