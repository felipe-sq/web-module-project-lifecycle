import React from 'react';

class Followers extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div key={user.id}>
            	<p>Followers: {user.followers}</p>
			</div>
		)
	}
}

export default Followers;