import { shallow } from 'enzyme';

import Hero from '../Hero';


describe('Hero component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Hero />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})