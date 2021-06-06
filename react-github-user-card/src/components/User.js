import React from 'react';
import { Container, Card, Badge, Image } from 'react-bootstrap';

class User extends React.Component {

	componentDidMount() {
		console.log("User CDM");
	}

	componentDidUpdate() {
		console.log("User CDU");
	}

	render() {
		console.log("User render");
		const { user } = this.props;

		return (
			<Container style={{ width: '30rem'}}>

				<Card bg='dark' text='light' border="dark" className="mb-2" key={user.id}>

				<h1><Badge variant="warning">Featured GitHub User</Badge></h1>

				<Image  variant="top" src={user.avatar_url} alt="github profile pic"/>
				<Card.Body>
					
					<Card.Subtitle as="h3">{user.name}</Card.Subtitle>
					
					<Card.Text>{user.location}</Card.Text>

					<Card.Text>
						<Badge variant="warning">Bio: {user.bio}</Badge>
					</Card.Text>

					<Card.Text>
						<Badge variant="warning">Profile: <a href={user.html_url}>{user.html_url}</a></Badge>
					</Card.Text>
					
					<Card.Text>
						<Badge variant="warning">Following: {user.following}</Badge>
					</Card.Text>

					<Card.Text>
						<Badge variant="warning">Public Repos: {user.public_repos} <br/><br/> <a href={user.repos_url}>{user.repos_url}</a></Badge>
					</Card.Text>
				</Card.Body>
				</Card>
			</Container>
		)
	}
}

export default User;