import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component{

	render(){
		console.log(this.props.users);
		return (
			<div>
				<ul>
					{this.props.users.map(item=>
						<li key = {item.id} >{item.first}</li>
					)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log(state);
	return{
		users: state.userDetails
	};
}

export default connect(mapStateToProps)(UserList);