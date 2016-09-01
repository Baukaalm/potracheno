import React from 'react';
import TextField from 'material-ui/TextField';
import Input from '../../components/Input';
import DatePicker from 'material-ui/DatePicker';
import {TopBar, TopBarHeading, TopBarIcon} from '../../components/TopBar';


export default function NewEventFirst(props) {
	return (
		<div>
			<TopBar>
				<TopBarIcon icon="arrow-back" onClick={props.onBack} />
				<TopBarHeading title="Новое мероприятие" />
				<TopBarIcon
					icon="arrow-forward-blue"
					onClick={props.onForward}
					disabled={!props.secondStepAvailable}
				/>
			</TopBar>

			<div style={{padding: '0 1rem'}}>					
				<Input
					style={{
						marginTop: '34px',
						fontSize: '20px',
					}}
					value={props.eventName}
					label="Название мероприятия"
					labelTransform={{
						transform: 'scale(0.6) translateY(-30px)',
						color: '#818f99',
					}}
					onChange={props.handleEventNameChange}
				/>

				<DatePicker
					fullWidth
					floatingLabelText="Начало"
					formatDate={formatDate}
					onChange={props.handleStartDateChange}
					minDate={props.start}
					value={props.start}
				/>
				<DatePicker
					fullWidth
					floatingLabelText="Завершение"
					formatDate={formatDate}
					onChange={props.handleEndDateChange}
					minDate={props.start}
					value={props.end}
				/>
			</div>
		</div>
	);
}

function formatDate(date) {
	const formattedDate = moment(date).format('dd, DD MMM YYYY');
	return formattedDate[0].toUpperCase() + formattedDate.slice(1);
}
