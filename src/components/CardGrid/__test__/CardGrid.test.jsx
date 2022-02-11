import { mount } from 'enzyme';

import CardGrid from '../CardGrid';


describe('CardGrid component', () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<CardGrid />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})