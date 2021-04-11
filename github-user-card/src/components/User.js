import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';

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
					<Container>
						<Card bg='success' text='light' border="primary" className="mb-2" key={user.id}>
                <Card.Img variant="top" src={user.avatar_url} alt="github profile pic"/>
                <Card.Body>
										<h1><Badge variant="secondary">Featured GitHub User</Badge></h1>
                    <Card.Subtitle as="h3">{user.name}</Card.Subtitle>
                    <Card.Text>{user.location}</Card.Text>
                    <Card.Text>Profile: <a href={user.html_url}>{user.html_url}</a></Card.Text>
                    <Card.Text>Following: {user.following}</Card.Text>
                    <Card.Text>Bio: {user.bio}</Card.Text>
                </Card.Body>
						</Card>
					</Container>
        )
    }
}

export default User;