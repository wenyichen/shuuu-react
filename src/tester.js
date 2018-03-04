import TestUtils from 'react-addons-test-utils';
import { renderIntoDocument } from 'react-addons-test-utils';
import { scryRenderedDOMComponentsWithClass as findByClass } from 'react-addons-test-utils';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Trip from './Trip';
import Trips from './Trips';

describe('<Trips />', () => {
  it('renders three <Trips /> components', () => {
    const wrapper = shallow(<Trips />);
    expect(wrapper.find(Trip)).to.have.length(1);
  });

  it('renders an `.chat`', () => {
    const wrapper = shallow(<Trips />);
    expect(wrapper.find(Trip).render().find('.chat')).to.have.length(11);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Trip>
        <div className="chat" />
      </Trip>
    ));
    expect(wrapper.contains(<div className="chat" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Trip />);
    wrapper.find('button show').simulate('click');
    expect(onButtonClick).to.have.property('state[0]', true);
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
