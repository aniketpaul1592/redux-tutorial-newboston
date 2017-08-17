import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component{
	render(){
		if(!this.props.userInfo){
			return <h4>Select User</h4>
		}else{
			return(
				<div>
					<p>{this.props.userInfo.first+this.props.userInfo.last}</p>
				</div>
			);
		}
	}
}

function mapStateToProps(state){
	console.log(state);
	return {
		userInfo:state.brainFunc
	};
}

export default connect(mapStateToProps)(UserInfo);