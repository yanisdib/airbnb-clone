import { shallow } from 'enzyme';

import Dropdown from '../Dropdown';


describe('Dropdown component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Dropdown />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})