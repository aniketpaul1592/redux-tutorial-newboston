function takeData(user){
	console.log(user.first);
	return{
		type:"User_Name",
		payload:user
	}
}

export default takeData;