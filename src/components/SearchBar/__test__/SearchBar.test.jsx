import { mount } from 'enzyme';

import SearchBar from '../SearchBar';


describe('SearchBar component', () => {
    let wrapper;
    const setLocationMock = jest.fn();
    const setCheckInDateMock = jest.fn();
    const setCheckOutDateMock = jest.fn();
    const setGuestsMock = jest.fn();


    beforeEach(() => {
        wrapper = mount(
            <SearchBar
                setLocation={setLocationMock}
                setCheckInDate={setCheckInDateMock}
                setCheckOutDate={setCheckOutDateMock}
                setGuests={setGuestsMock}
            />
        );
    })

    afterEach(() => {
        setLocationMock.mockClear()
        setCheckInDateMock.mockClear()
        setCheckOutDateMock.mockClear()
        setGuestsMock.mockClear()
    })


    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('calls setLocation props', () => {
        const value = 'France';

        wrapper.find('input').at(0).simulate('change', { target: { value } })

        expect(setLocationMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value } }))
    })

    it('calls setCheckIn props', () => {
        const value = '456378';

        wrapper.find('input').at(1).simulate('change', { target: { value } })

        expect(setCheckInDateMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value } }))
    })

    it('calls setCheckOut props', () => {
        const value = '473894';

        wrapper.find('input').at(2).simulate('change', { target: { value } })

        expect(setCheckOutDateMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value } }))
    })

    it('calls setGuests props', () => {
        const value = 'Hello world';

        wrapper.find('input').at(3).simulate('change', { target: { value } })

        expect(setGuestsMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value } }))
    })
})