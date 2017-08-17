import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TakeData from '../actions/actionTakeDataOnClick.js'
class UserList extends Component{

	render(){
		return (
			<div>
				<ul>
					{this.props.users.map(item=>
						<li key = {item.id} onClick={()=>this.props.TakeData(item)}>{item.first}</li>
					)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		users: state.userDetails
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({TakeData:TakeData},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);