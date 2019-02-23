import React from 'react';
import bayOfPigs from "../hog-imgs/cherub.jpg";
import augustusGloop from "../hog-imgs/augustus_gloop.jpg";
import cherub from "../hog-imgs/cherub.jpg";
import galaxyNote from "../hog-imgs/galaxy_note.jpg";
import leggoMyEggo from "../hog-imgs/leggo_my_eggo.jpg";
import mudblood from "../hog-imgs/mudblood.jpg";
import piggySmalls from "../hog-imgs/piggy_smalls.jpg";
import porkchop from "../hog-imgs/porkchop.jpg";
import rainbowdash from "../hog-imgs/rainbowdash.jpg";
import sobriety from "../hog-imgs/sobriety.jpg";
import theProsciuttoConcern from "../hog-imgs/the_prosciutto_concern.jpg";
import trouble from "../hog-imgs/trouble.jpg";
import truffleShuffle from "../hog-imgs/truffleshuffle.jpg";

const imgMapper = {
      'Mudblood': mudblood,
      'Porkchop': porkchop,
      'Cherub': cherub,
      'Piggy smalls': piggySmalls,
      'Trouble': trouble,
      'Sobriety': sobriety,
      'Rainbowdash': rainbowdash,
      'TruffleShuffle': truffleShuffle,
      'Bay of Pigs': bayOfPigs,
      'The Prosciutto Concern': theProsciuttoConcern,
      'Galaxy Note': galaxyNote,
      'Leggo My Eggo': leggoMyEggo,
      'Augustus Gloop': augustusGloop
}

export default class Tile extends React.Component {
  state = {
    clicked: false
  }

  toggleClickedState = event => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {
      name,
      specialty,
      greased,
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': weight,
      'highest medal achieved': medal
    } = this.props.hog

    return (
      <div className="ui raised link card eight wide column" onClick={this.toggleClickedState}>
        <div className="image">
          <img alt="" src={imgMapper[name]}/>
        </div>
        <div className="content">
          <i className="right floated like icon"></i>
          <i className="right floated star icon"></i>
          <div className="left floated header">{name}</div>
          {this.state.clicked &&
            <div className="ui divided list float left">
              <div className="description">
                <i className="trophy icon"></i>Specialty: {specialty}<br/>
                <i className="fas fa-weight"></i> {weight} lbs<br/>
                <i className="trophy icon"></i>{medal}
              </div>
            </div>
          } {/* End of state clicked for description text*/}
        </div>

        {this.state.clicked &&
          <div className="extra content">
            <a>
              {greased && <span><i className="certificate icon"></i>GREASED</span>}
            </a>
          </div>
        } {/* End of state clicked for greased text*/}
        {/* End of card*/}
      </div>
    )
  }
}
