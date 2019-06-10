import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from "jest-fetch-mock";
 
// global.fetch = fetchMock;
// global.fetch = jest.fn();
Enzyme.configure({adapter: new Adapter()});