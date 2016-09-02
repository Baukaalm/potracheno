import React from 'react';
import {withRouter, Link} from 'react-router';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import Wrapper from '../components/Wrapper';
import {TopBar, TopBarHeading, TopBarIcon} from '../components/TopBar';
import EventsListItem from '../components/EventsListItem';
import {readEvents} from '../actions';
import FlexContainer from '../components/FlexContainer';
import changeCurrentEvent from '../actions/changeCurrentEvent';


const EventsPage = React.createClass({
	componentDidMount() {
		const {props} = this;
		props.dispatch(readEvents());
	},

	goToNewEvent() {
		this.props.router.push('/events/new');
	},

	goToEvent(eventId) {
		this.props.dispatch(changeCurrentEvent(eventId));
		this.props.router.push(`events/${eventId}`);
	},

	renderEventPreview(eventData) {
		const {eventId, data} = eventData;

		return (
			<div onClick={() => this.goToEvent(eventId)} key={eventId}>
				<EventsListItem
					title={data.name}
					membersCount={data.participants.length}
					date={data.start}
					sum={data.sum || 0}
					debtType="positive"
				/>
			</div>
		);
	},

	renderEvents(events, eventsById) {
		let result = events
			.slice()
			.reverse()
			.map(getEventData(eventsById))
			.map(this.renderEventPreview);

		if (!result.length) {
			result = (
				<FlexContainer alignItems="center" justifyContent="center">
					<p>Мероприятий нет. <Link to="/events/new">Создайте первое!</Link></p>
				</FlexContainer>
			);
		}

		return result;
	},

	render() {
		const {props} = this;
		return (
			<Wrapper>
				<TopBar>
					<TopBarIcon icon="burger" />
					<TopBarHeading title="Мероприятия" />
					<TopBarIcon icon="plus" onClick={this.goToNewEvent} />
				</TopBar>
				{props.eventsLoaded ?
					this.renderEvents(props.events, props.eventsById)
					:
					<FlexContainer alignItems="center" justifyContent="center">
						<CircularProgress />
					</FlexContainer>
				}
			</Wrapper>
		);
	},
});

function getEventData(eventsById) {
	return (eventId) => ({
		eventId,
		data: eventsById[eventId],
	});
}

const mapStateToProps = ({events}) => {
	return {
		eventsLoaded: events.loaded,
		events: events.events,
		eventsById: events.eventsById,
	};
};

export default connect(mapStateToProps)(withRouter(EventsPage));
