import React from 'react';
import { Badge } from 'react-bootstrap';

class Followers extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div key={user.id}>
            	<p><Badge variant='success'>Followers: {user.followers}</Badge></p>
			</div>
		)
	}
}

export default Followers;