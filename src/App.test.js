import React from 'react';
import {App} from './App';
import toJson from 'enzyme-to-json';
import axios from 'axios'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, render, mount} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

  	test('taking snapshot?', ()=>{
  		let component = render(<App reducer2={[1,2,3]} />)
  	expect(toJson(component)).toMatchSnapshot()
  	})

    test('foofoo', () => {
  	let component = shallow(<App reducer2={[1,2,3]}  reducer1={'Initial State'} />)
  	expect(component.find('#props').text()).toEqual('Initial State')
    });

    test('testing input change', () => {
    let wrapper = shallow(<App reducer2={[1,2,3,4]}/>);
    let instance = wrapper.instance();
    let mockPrevent = jest.fn()
    instance.write({target:{value:'Kevin'},preventDefault:mockPrevent})
    expect(wrapper.state('username')).toBe('Kevin');
  });
    
    test('testing PreventDefault', () => {
    let wrapper = shallow(<App reducer2={[1,2,3,4]}/>);
    let instance = wrapper.instance();
    let mockPrevent = jest.fn()
    instance.write({target:{value:'Kevin'},preventDefault:mockPrevent})
    expect(mockPrevent).toHaveBeenCalled();


  });

    test('check how state is rendered', ()=>{
    let wrapper = shallow(<App reducer2={[1,2,3,4]}/>);
    wrapper.setState({testState:"str"})
    expect(wrapper.find('#checkState').text()).toBe("str")
    })
    
    test('check how state is rendered', ()=>{
    let wrapper = shallow(<App reducer2={[1,2,3,4]}/>);
    wrapper.setState({testState:"str"})
    expect(wrapper.find('#checkState').text()).toBe("str")
    })
