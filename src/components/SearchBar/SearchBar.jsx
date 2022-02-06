import PropTypes from 'prop-types';
import styled from 'styled-components';


const Bar = styled.div`
    --big-search-form-background: #FFFFFF;

    display: flex;
    position: relative;
    width: 100%;
    height: 66px;
    background-color: var(--big-search-form-background);
    border-radius: 32px;
`;

const Wrapper = styled.div`
    display: flex;
    height: inherit;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    background-color: var(--big-search-form-background);
    border-radius: 5rem;
`;

const FormGroup = styled.div`
    display: flex;
`;


const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3 0 0%;
    position: relative;
    padding: 14px 24px;
    cursor: pointer;

    &:hover {
        background-color: #E7E7E7;
        border-radius: 5em;

        ::before {
            border-width: 0px 1px;
            border-style: solid;
            border-color: transparent;
            content: "";
            height: 32px;
            left: -1px;
            margin-top: -16px;
            position: absolute;
            right: -1px;
            top: 50%;
            z-index: 0;
            display: block;
        }
    }

    &:focus {
            border: 1px solid #DDDDDD;
            box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
        }

    label {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px !important;
        letter-spacing: 0.04em !important;
        padding-bottom: 2px !important;
        color: var(--ui-brand-color);
        cursor: pointer;
    }

    input {
        height: inherit;
        outline: none;
        background: none;
        color: #222222;
        line-height: 18px;
        text-overflow: ellipsis;

        &::placeholder {
            font-family: var(--ui-brand-font);
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            text-overflow: ellipsis;
        }
    }
`;

const FormControlSeparator = styled.div`
    align-self: center;
    border-right: 1px solid #DDDDDD;
    -webkit-flex: 0 0 0px;
    -ms-flex: 0 0 0px;
    flex: 0 0 0px;
    height: 32px;
`;

const LocationField = styled.input``;

const CheckInDateField = styled.div`
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-overflow: ellipsis;    line-height: 18px;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const CheckOutDateField = styled.div`
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-overflow: ellipsis;    line-height: 18px;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const GuestsField = styled.div`
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-overflow: ellipsis;    line-height: 18px;
    text-overflow: ellipsis;
    cursor: pointer;
`;


function SearchBar({ setLocation, setCheckInDate, setCheckOutDate, setGuests }) {
    return (
        <Bar>
            <Wrapper>
                <Content>
                    <FormGroup>
                        <FormControl>
                            <label>Location</label>
                            <LocationField placeholder='Where are you going?' onChange={setLocation} />
                        </FormControl>
                        <FormControlSeparator />
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <label>Check in</label>
                            <CheckInDateField placeholder='Add dates' onChange={setCheckInDate}>
                                Add dates
                            </CheckInDateField>
                        </FormControl>
                        <FormControlSeparator />
                        <FormControl>
                            <label>Check out</label>
                            <CheckOutDateField placeholder='Add dates' onChange={setCheckOutDate}>
                                Add dates
                            </CheckOutDateField>
                        </FormControl>
                        <FormControlSeparator />
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <label>Guests</label>
                            <GuestsField placeholder='Add guests' onChange={setGuests}>
                                Add guests
                            </GuestsField>
                        </FormControl>
                    </FormGroup>
                </Content>
            </Wrapper>
        </Bar >
    );
}


SearchBar.defaultProps = {
    setLocation: () => { },
    setCheckInDate: () => { },
    setCheckOutDate: () => { },
    setGuests: () => { }
};

SearchBar.propTypes = {
    setLocation: PropTypes.func.isRequired,
    setCheckInDate: PropTypes.func.isRequired,
    setCheckOutDate: PropTypes.func.isRequired,
    setGuests: PropTypes.func.isRequired
};


export default SearchBar;