export function changeUserName(name){
	return {
		type: "USER_CHANGE_NAME",
		payload: name
	}
}

export function changeUserAge(age){
	return {
		type: "USER_CHANGE_AGE",
		payload: age
	}
}

export function toggle(){
	return {
		type: "USER_TOGGLE"
	}
}