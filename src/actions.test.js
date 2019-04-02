import {mockAPI, add} from './actions';
import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {App} from './App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

  test('expected actions should be dispatched on successful request', () => {
  	let foo = jest.fn()
  	let wrapper = shallow(<App reducer2={[1,2,3,4]} mockAPI={foo} />)
  	wrapper.find('#clicks').simulate('click',{preventDefault: () => {}})
  	expect(foo).toHaveBeenCalled()
  })
  test('expected actions', () => {
  	expect(add('payload')).toEqual({type:"ADD_ONE", payload:'payload'})
  })




  test('API test', () => {

    const mockStore = configureMockStore([thunk]);
    let store = mockStore({});

    // when
    store.dispatch(mockAPI('kkk')).then(()=>{
    expect(store.getActions()[0]).toEqual(
        { payload: {ava:'TestAva', username:'kkk'}, type: "ADD_USER" });
    })
  })

// export function add(payload){
// 	return {type:"ADD_ONE", payload}
// }