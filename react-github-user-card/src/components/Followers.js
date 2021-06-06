import React from 'react';
import { Badge } from 'react-bootstrap';

class Followers extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div key={user.id}>
				<h3><Badge variant='danger'>Followers: {user.followers}</Badge></h3>
			</div>
		)
	}
}

export default Followers;