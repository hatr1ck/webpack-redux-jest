import {reducer1, reducer2} from './reducers'

	test('testing adding element to state', ()=>{
		
		expect(reducer1([], {type: 'ADD_ONE', payload:'Testing'})).toEqual([' Testing'])
	})
	test('returns state with wrong payload', ()=>{
		
		expect(reducer1(['Initial State'], {type: 'Testing', payload:'Testing'})).toEqual(['Initial State'])
	})

	test('testing adding user to state', ()=>{
		
		expect(reducer2([], {type: 'ADD_USER', payload:'Testing'})).toEqual(['Testing'])
	})

	test('returns state with wrong payload', ()=>{
		
		expect(reducer2(['Initial State'], {type: 'Testing', payload:'Testing'})).toEqual(['Initial State'])
	})

// export function reducer1(state=['Initial State'], action ){
// 	if(action.type === 'ADD_ONE'){
// 		return state = [...state, ` ${action.payload}`]
// 	}
// 	else{
// 		return state
// 	}
// }
// export function reducer2(state=[], action ){
// 	if(action.type === 'ADD_USER'){
// 		return state = [...state, action.payload]
// 	}
// 	else{
// 		return state
// 	}
// }