export function changeEmpName(name){
	return {
		type: "EMP_CHANGE_NAME",
		payload: name
	}
}

export function changeEmpAge(age){
	return {
		type: "EMP_CHANGE_AGE",
		payload: age
	}
}