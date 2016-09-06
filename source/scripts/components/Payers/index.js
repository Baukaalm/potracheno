import React from 'react';
import UniversalListItem from '../UniversalListItem';

const Payers = React.createClass({
	render() {
		const {props} = this;
		return (
			<div className="payers">
				{props.participants.map((user) => {
					return (
						<UniversalListItem
							onClick={() => this.props.changePayer(user)}
							id={user}
							text={user}
							key={user}
							iconId={7}
							checkMark={props.payer === user}
						/>
					);
				})}
			</div>
		);
	},
});


export default Payers;
