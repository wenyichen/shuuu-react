import TestUtils from 'react-dom/test-utils';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { render, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Link, MemoryRouter } from 'react-router-dom'

import Message from './Message';
import Trip from './Trip';
import Trips from './Trips';

Enzyme.configure({ adapter: new Adapter() })

describe('<Trips />', () => {
  it('renders two <Trips /> components', () => {
    const wrapper = shallow(<Trips />);
    expect(wrapper.find(Trip).length).toBe(2);
  });

  it('renders a navbar when passed in', () => {
    const wrapper = shallow(<Trips />);
    expect(wrapper.find('Navbar').length).toBe(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(<Trips />);
    expect(wrapper.find('#trips').length).toBe(1);
  });
});


describe('<Trip />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Trip date="2018/03/03" />);
    expect(wrapper.props().date).to.equal('2018/03/03');
    wrapper.setProps({ date: '1998/03/03' });
    expect(wrapper.props().date).to.equal('1998/03/03');

    wrapper.setProps({ driver: 'Justin' });
    expect(wrapper.props().driver).to.equal('Justin');

    wrapper.setProps({ status: 'ready' });
    expect(wrapper.props().status).to.equal('ready');
  });

  it('renders messages when passed in', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Trips/>
      </MemoryRouter>);
    expect(wrapper.find(Trip).at(0).find(Message).length).toBe(11);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Trip /*onButtonClick={onButtonClick}*/ />
    ));
    wrapper.find('button show').simulate('click');
    expect(onButtonClick).to.have.property('state[0]', true);

    wrapper.find('button show').simulate('click');
    expect(onButtonClick).to.have.property('state[0]', false);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
    Foo.prototype.componentDidMount.restore();
  });
});
