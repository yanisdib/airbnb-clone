import { shallow } from 'enzyme';

import MenuDropdown from '../MenuDropdown';


describe('MenuDropdown component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<MenuDropdown />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})