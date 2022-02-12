import { mount } from 'enzyme';
import toHaveStyleRule from 'jest-styled-components';

import Button from '../Button';


describe('Button component', () => {
    let wrapper;

    beforeAll(() => wrapper = mount(<Button>Hello</Button>))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('renders with text content', () => expect(wrapper.text()).toBe('Hello'))

    it('renders with black background if variant props is true', () => {
        const wrapperVariant = mount(<Button variant />);

        expect(wrapperVariant).toHaveStyleRule('background', 'var(--btn-alt-color)')
    })
})