import styled from 'styled-components';

import { Dropdown } from '..';


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 0 !important;
`;

const AuthLinkList = styled.ul`
    padding: 10px 0;
    border-bottom: 1px solid #DFDFDF;

    a {
        display: flex;
        width: fit-content;
        color: #000000;
        font-size: 0.9em;
        font-weight: 400;
        padding: 10px 16px;
        text-decoration: none;

        &:first-child {
            font-weight: 500;
        }
    }
`;

const PublicLinkList = styled.ul`
    padding: 10px 0;

    a {
        display: flex;
        width: fit-content;
        color: #000000;
        font-size: 0.9em;
        font-weight: 400;
        padding: 10px 16px;
        text-decoration: none;

        &:first-child {
            font-weight: 500;
        }
    }
`;


function MenuDropdown() {
    return (
        <Dropdown width={255}>
            <Wrapper>
                <AuthLinkList>
                    <a href="/">Sign up</a>
                    <a href="/">Log in</a>
                </AuthLinkList>
                <PublicLinkList>
                    <a href="/">Host your home</a>
                    <a href="/">Host an experience</a>
                    <a href="/">Help</a>
                </PublicLinkList>
            </Wrapper>
        </Dropdown>
    );
}


export default MenuDropdown;