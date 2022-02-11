import { mount } from 'enzyme';

import TripSuggestion from '../TripSuggestion';


describe('TripSuggestion component', () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<TripSuggestion />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
}) 