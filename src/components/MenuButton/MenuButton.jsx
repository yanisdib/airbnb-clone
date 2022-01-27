import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AccountCircle, Menu } from '@styled-icons/material';


const Wrapper = styled.div`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`;

const Button = styled.button`
    display: flex !important;
    column-gap: 8px !important;
    align-items: center !important;
    justify-content: center !important;
    height: fit-content !important;
    background-color: #FFFFFF !important;
    border: 1px #DDDDDD solid !important;
    border-radius: 5rem !important;
    padding: 3px 3px 3px 10px !important;
    cursor: pointer !important;
`;

const UserPictureThumbnail = styled.div`
    display: flex !important;
`;

const UserIcon = styled(AccountCircle)`
    height: 34px !important;
    fill: #717171 !important;
`;

const MenuIcon = styled(Menu)`
    height: 19px !important;
    fill: #222222 !important;
`;


function MenuButton({ onClick }) {
    return (
        <Wrapper>
            <Button onClick={onClick}>
                <MenuIcon />
                <UserPictureThumbnail>
                    <UserIcon />
                </UserPictureThumbnail>
            </Button>
        </Wrapper>
    );
}


MenuButton.defaultProps = { onClick: () => { } };

MenuButton.propTypes = { onClick: PropTypes.func.isRequired };


export default MenuButton;