import { shallow } from 'enzyme';

import MenuButton from '../MenuButton';


describe('MenuButton component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<MenuButton />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})