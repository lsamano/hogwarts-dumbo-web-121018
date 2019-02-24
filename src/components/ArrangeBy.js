import React from 'react';

const ArrangeBy = props => {
	return (
    <form className="ui form">
      <div className="three fields">

        <div className="field">
          <select
						className="ui fluid dropdown"
						onChange={props.handleArrangeType}
						>
            <option value="default">Default</option>
            <option name="name" value="name">Name (A-Z)</option>
            <option name="weight" value="weight">Weight (Ascending)</option>
          </select>
        </div>

				<div className="ui icon input field">
				  <input
						type="text"
						placeholder="Search..."
						value={props.searchTerm}
						onChange={props.filterbySearchTerm}
						/>
				  <i className="search icon"></i>
				</div>



				<div className="inline field">
					<div className="ui fluid toggle checkbox">
						<input
							type="checkbox"
							tabIndex="0"
							checked={props.checked}
							onChange={props.handleFilterToggle}
							/>
						<label>Greased</label>
					</div>
					<div className="ui fluid toggle checkbox">
						<input
							type="checkbox"
							tabIndex="0"
							/>
						<label>Faves</label>

					</div>
				</div>


      </div>
    </form>
	)
}

export default ArrangeBy
