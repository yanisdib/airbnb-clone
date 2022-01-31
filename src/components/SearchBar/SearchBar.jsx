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
    height: inherit;
    background-color: var(--big-search-form-background);
    border-radius: 5rem;
`;

const FormGroup = styled.div`
    display: flex;

    input {
        height: 100%;
        border-radius: 5em;
        outline: none;

        &:focus {
            border: 1px solid #DDDDDD;
            box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
        }
    }
`;

const LocationField = styled.input``;

const CheckInDateField = styled.input``;

const CheckOutDateField = styled.input``;

const GuestsField = styled.input``;


function SearchBar({ setLocation, setCheckInDate, setCheckOutDate, setGuests }) {
    return (
        <Bar>
            <Wrapper>
                <Content>
                    <FormGroup>
                        <LocationField onChange={setLocation} />
                        <CheckInDateField onChange={setLocation} />
                        <CheckOutDateField onChange={setLocation} />
                        <GuestsField onChange={setLocation} />
                    </FormGroup>
                </Content>
            </Wrapper>
        </Bar>
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