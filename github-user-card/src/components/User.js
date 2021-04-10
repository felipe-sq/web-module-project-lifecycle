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
        return (
            <div>GitHub User</div>
        )
    }
}

export default User;