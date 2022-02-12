import { mount } from 'enzyme';

import ExperiencesSection from '../ExperienceSection';


describe('ExperiencesSection component', () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<ExperiencesSection />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})