import { shallow } from 'enzyme';

import SearchBar from '../SearchBar';


describe('SearchBar component', () => {
    let wrapper;
    const setLocationMock = jest.fn();
    const setCheckInDateMock = jest.fn();
    const setCheckOutDateMock = jest.fn();
    const setGuestsMock = jest.fn();


    beforeEach(() => {
        wrapper = shallow(
            <SearchBar
                setLocation={setLocationMock}
                setCheckInDate={setCheckInDateMock}
                setCheckOutDate={setCheckOutDateMock}
                setGuests={setGuestsMock}
            />
        );
    })


    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('calls setLocation props', () => {
        wrapper.find('input').simulate('change', event)
        expect(setLocationMock).toHaveBeenCalled()
    })

    it('calls setCheckIn props', () => {
        wrapper.find('input').simulate('change', event)
        expect(setCheckInDateMock).toHaveBeenCalled()
    })

    it('calls setCheckOut props', () => {
        wrapper.find('input').simulate('change', event)
        expect(setCheckOutDateMock).toHaveBeenCalled()
    })

    it('calls setGuests props', () => {
        wrapper.find('input').simulate('change', event)
        expect(setGuestsMock).toHaveBeenCalled()
    })
})