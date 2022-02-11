import { mount } from 'enzyme';
import createMockStore from 'redux-mock-store';

import Header from '../Header';
import { Provider } from 'react-redux';


describe('Header component', () => {
    let wrapper;

    const middlewares = [];
    const initialState = { cities: {} };
    const mockStore = createMockStore(middlewares);
    const store = mockStore(initialState);

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    })

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})