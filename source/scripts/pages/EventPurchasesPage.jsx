import React from 'react';
import List from '../components/List';
import PurchaseListItem from '../components/PurchaseListItem';
import FAButton from '../components/FAButton';

const EventPurchasesPage = React.createClass({
	render() {
		return (
			<div>
				<List>
					<PurchaseListItem
						buyer="Андрей"
						title="Шашлык"
						subtitle="все 5 участников"
						price={1500}
					/>
					<PurchaseListItem
						buyer="Андрей"
						title="Шашлык"
						subtitle="все 5 участников"
						price={1500}
					/>
					<PurchaseListItem
						buyer="Андрей"
						title="Шашлык"
						subtitle="все 5 участников"
						price={1500}
					/>

				</List>
				<FAButton />
			</div>
			);
	},
});

export default EventPurchasesPage;
