import React, { Component } from 'react';
import './App.css';
import appService from './services/appService';
import ViewExercises from './ViewExercises';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			exercises: []
		};
	}

	componentDidMount() {
		appService.getExercises().then(resp => {
			this.setState({
				exercises: resp
			})
		})
	}

	render() {
		return (
			<div>
				<ViewExercises exercises={this.state.exercises} />
			</div>
		);
	}
}

export default App;
