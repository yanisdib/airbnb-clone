import { shallow } from 'enzyme';

import SearchBarButton from '../SearchBarButton';


describe('SearchBarButton component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<SearchBarButton>Search</SearchBarButton>))

    it('should render correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('should have text as a children props', () => expect(wrapper.text()).toBe('Search'))
})