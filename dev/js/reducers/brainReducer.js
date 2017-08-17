/*This reducer responds to actions*/

function brainFunc(state=null,action){
	console.log(action.payload)
	switch(action.type){
		case "User_Name":
		return action.payload;
		break;
	}
	return state;
}

export default brainFunc;