import React, {PropTypes} from 'react';
import CheckBox from '../CheckBox';
import CheckMark from '../CheckMark';

const UniversalListItem = React.createClass({
	propTypes: {
		text: PropTypes.string.isRequired,
		price: PropTypes.number,
		isCheckable: PropTypes.bool,
		isBordered: PropTypes.bool,
		isChecked: PropTypes.bool,
		checkBoxChecked: PropTypes.bool,
	},

	render() {
		const baseClass = 'universal-list-item';
		const rootClasses = [baseClass, 'unselectable'];
		const {props} = this;

		if (props.isBordered) {
			rootClasses.push(`${baseClass}_bordered`);
		}

		return (
			<div className={rootClasses.join(' ')} onClick={this.props.onClick}>
				{props.isCheckBox && <CheckBox checked={this.props.checkBoxChecked} />}
				<div className={`${baseClass}__text`}>{props.text}</div>
				{props.price !== undefined && <div className={`${baseClass}__price`}>{props.price} Р</div>}
				{props.checkMark && <CheckMark />}
			</div>
		);
	},
});

export default UniversalListItem;
