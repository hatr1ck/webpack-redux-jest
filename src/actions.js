import axios from 'axios';



export function mockAPI(username){
	return (dispatch)=>{
		return axios.get(`https://reqres.in/api/users`).then((pay)=>{
       		return dispatch({type:"ADD_USER", payload:{ava:pay.data.data.avatar, username:username}})
       	})
	}
}

export function add(payload){
	return {type:"ADD_ONE", payload}
}