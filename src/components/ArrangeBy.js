import React from 'react';

const ArrangeBy = props => {
	return (
    <form className="ui form">
      <div className="two fields">

        <div className="field">
          <label>Arrange By</label>
          <select className="ui fluid dropdown" onChange={props.handleArrangeType}>
            <option value="default">Default</option>
            <option name="name" value="name">Name</option>
            <option name="weight" value="weight">Weight</option>
          </select>
        </div>


				<div className="inline field">
					<label>Toggle Greased Hogs</label>
					<div className="ui fluid toggle checkbox">
						<input type="checkbox" tabIndex="0" checked={props.checked} onChange={props.handleFilterToggle}/>
						<label>Toggle</label>
					</div>
				</div>


      </div>
    </form>
	)
}

export default ArrangeBy
