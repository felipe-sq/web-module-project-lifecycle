import React from 'react';

class SearchForm extends React.Component {
	constructor() {
		super();
		this.state = {
			githubUser: ''
		}
	}

	handleChange = e => {
		this.setState({
			...this.state,
			githubUser: e.target.value
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log('Submitting!');
		this.props.fetchUser(this.state.githubUser);
		this.setState({
			...this.state,
			githubUser: ''
		})
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("CDU running search form");
		if (prevState.githubUser !== this.state.githubUser) {
			console.log('the Github user has changed!')
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.githubUser} 
					onChange={this.handleChange}></input>{''} {''}{''}
					<button className="search-btn">Search for a Github User</button>
				</form><br/>
			</div>
		)
	}
}

export default SearchForm;