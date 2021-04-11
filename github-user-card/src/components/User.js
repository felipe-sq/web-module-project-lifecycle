import React from 'react';

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
            <div key={user.id}>
                <img width="300" src={user.avatar_url} alt="github profile pic"/>
                <div>
										<h1>Featured GitHub User</h1>
                    <h3>{user.name}</h3>
                    <p>{user.location}</p>
                    <p>Profile: <a href={user.html_url}>{user.html_url}</a></p>
                    {/* <p>Followers: {user.followers}</p> */}
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </div>
            </div>
        )
    }
}

export default User;