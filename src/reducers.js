export function reducer1(state=['Initial State'], action ){
	if(action.type === 'ADD_ONE'){
		return state = [...state, ` ${action.payload}`]
	}
	else{
		return state
	}
}
export function reducer2(state=[], action ){
	if(action.type === 'ADD_USER'){
		return state = [...state, action.payload]
	}
	else{
		return state
	}
}