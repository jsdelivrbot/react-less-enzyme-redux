import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import register from 'ignore-styles';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

register(['.less']);
chai.use(chaiEnzyme())

Enzyme.configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.mount = mount;
global.render = render;
global.shallow = shallow;
