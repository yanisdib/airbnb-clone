import { shallow } from 'enzyme';

import Header from '../Header';


describe('Header component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Header></Header>))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})