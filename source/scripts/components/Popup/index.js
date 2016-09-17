import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

const Popup = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
		closeIcon: PropTypes.bool,
		okButton: PropTypes.shape({
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		}),
		cancelButton: PropTypes.shape({
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		}),
		onClose: PropTypes.func,
	},

	render() {
		const {props} = this;
		const {okButton, cancelButton, unBordered, largeHeader} = props;
		const rootClasses = ['popup'];
		const headerClasses = ['popup__header'];
		if (largeHeader) headerClasses.push('popup__header_large');
		if (unBordered) headerClasses.push('popup__header_unbordered');
		const titleClasses = ['popup__title'];
		if (largeHeader) titleClasses.push('popup__title_large');

		if (!okButton && !cancelButton) {
			rootClasses.push('popup_without-footer');
		}

		return (
			<div className={rootClasses.join(' ')}>
				<div className="popup__overlay" onClick={props.onClose} />
				<div className="popup__wrapper">
					<div className="popup__inner">
						<div className={headerClasses.join(' ')}>
							{props.closeIcon && <div
								className="popup__icon popup__icon_close"
								onClick={props.onClose}
							/>}
							<div className={titleClasses.join(' ')}>{props.title}</div>
						</div>
						<div className={`popup__content ${unBordered && 'popup__content_unbordered'}`}>
							{props.children}
						</div>
						{(okButton || cancelButton) && <PopupFooter
							okButton={okButton}
							cancelButton={cancelButton}
							unBordered={unBordered}
						/>}
					</div>
				</div>
			</div>
		);
	},
});

function PopupFooter(props) {
	const {okButton, cancelButton, unBordered} = props;

	return (
		<div className={`popup__footer ${unBordered && 'popup__footer_unbordered'}`}>
			{cancelButton && <FlatButton label={cancelButton.text} onTouchTap={cancelButton.onClick} />}
			{okButton && <FlatButton label={okButton.text} onTouchTap={okButton.onClick} />}
		</div>
	);
}

export default Popup;

// Example usage
// <Popup
// 	title="Шашлык"
// 	closeIcon
// 	okButton={{
// 		text: 'Добавить',
// 		onClick: () => {},
// 	}}
// 	cancelButton={{
// 		text: 'Отменить',
// 		onClick: () => {},
// 	}}
// >
// 	<div>Popup content</div>
// </Popup>
