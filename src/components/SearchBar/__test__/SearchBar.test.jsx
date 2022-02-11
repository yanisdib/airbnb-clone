import { mount } from 'enzyme';

import SearchBar from '../SearchBar';


describe('SearchBar component', () => {
    let wrapper;
    const setLocationMock = jest.fn();
    const displayCheckInDateDropdownMock = jest.fn();
    const displayCheckOutDateDropdownMock = jest.fn();
    const displayGuestsDropdownMock = jest.fn();


    beforeEach(() => {
        wrapper = mount(
            <SearchBar
                setLocation={setLocationMock}
                displayCheckInDateDropdown={displayCheckInDateDropdownMock}
                displayCheckOutDateDropdown={displayCheckOutDateDropdownMock}
                displayGuestsDropdown={displayGuestsDropdownMock}
            />
        );
    })

    afterEach(() => {
        setLocationMock.mockClear()
        displayCheckInDateDropdownMock.mockClear()
        displayCheckOutDateDropdownMock.mockClear()
        displayGuestsDropdownMock.mockClear()
    })


    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('calls setLocation props', () => {
        const value = 'France';

        wrapper.find('input').at(0).simulate('change', { target: { value } })

        expect(setLocationMock).toHaveBeenCalled()
    })

    it('calls setCheckIn props', () => {
        wrapper.find('div#checkInDate').simulate('click')

        expect(displayCheckInDateDropdownMock).toHaveBeenCalled()
    })

    it('calls setCheckOut props', () => {
        wrapper.find('div#checkOutDate').simulate('click')

        expect(displayCheckOutDateDropdownMock).toHaveBeenCalled()
    })

    it('calls setGuests props', () => {
        wrapper.find('div#guests').simulate('click')

        expect(displayGuestsDropdownMock).toHaveBeenCalled()
    })
})