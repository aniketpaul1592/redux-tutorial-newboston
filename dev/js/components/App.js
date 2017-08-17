import React,{Component} from 'react';
import UserList from '../containers/user-list.js';

class App extends Component{
	render(){
		return (
			<div>
				<UserList/>
				<h2>Testing One two three</h2>
			</div>
		);
	}
}

export default App;