import { useState } from 'react';
import styled from 'styled-components';
import { Language } from '@styled-icons/material';

import { Container, MenuButton, MenuDropdown } from '..';


import whiteLogo from '../../assets/svg/logo-original-w.svg';


const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    --header-brand-color: #FF385C;
    background-color: var(--ui-brand-color);
    color: #FFFFFF;
    padding: var(--ui-padding-y) 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--ui-brand-color);
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.div`
    display: flex;
    flex: 3;
`;

const SearchNav = styled.div`
    display: flex;
    flex: 3;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    height: 80px;
`;

const SearchTab = styled.div`
    display: flex;
    position: relative;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 16px;

    &::after {
        content: "";
        position: absolute;
        width: ${({ isSearchTabActive }) => isSearchTabActive ? 17 : 0}px;
        height: 1px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-bottom: 2px solid #FFFFFF;
    }

    ${({ isSearchTabActive }) => !isSearchTabActive &&
        `&:hover {                
            cursor: pointer;

            &::after {
                content: "";
                position: absolute;
                width: 5px;
                height: 1px;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                border-bottom: 2px solid white;
                transition: width 300ms ease;
            }
        }`
    }
`;

const UserNav = styled.div`
    display: flex;
    flex: 3;
    position: relative;
    justify-content: flex-end;
    align-items: center;

    &:last-of-type div{
        margin-left: 8px !important;
    }

    button {
        width: fit-content;
        height: fit-content;
        background: transparent;
        color: #FFFFFF;
        padding: 12px;
        border-radius: 10rem;
        font-size: 14px;
        line-height: 18px;
        cursor: pointer;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transition: background 10ms linear;
        }

        svg {
            fill: #FFFFFF;
            stroke-width: 1px;
            height: 20px;
        }
    }
`;


function Header() {
    const [isMenuDropdownDisplayed, setIsMenuDropdownDisplayed] = useState(false);

    return (
        <StyledHeader>
            <Wrapper>
                <Container>
                    <Content>
                        <Logo>
                            <iframe src={whiteLogo} width={102} height={50} >
                                <img src={whiteLogo} width={102} height={50} />
                            </iframe>
                        </Logo>
                        <SearchNav>
                            {
                                // TODO: onClick the current Active Tab changes with state (1 as default) taking the current selected Tab
                            }
                            <SearchTab isSearchTabActive={true}>Places to stay</SearchTab>
                            <SearchTab>Experiences</SearchTab>
                            <SearchTab>Online experiences</SearchTab>
                        </SearchNav>
                        <UserNav>
                            <button>Become a Host</button>
                            <button>
                                <Language />
                            </button>
                            {isMenuDropdownDisplayed && <MenuDropdown />}
                            <MenuButton
                                onClick={() => setIsMenuDropdownDisplayed(prevIsMenuDropdownDisplayed => !prevIsMenuDropdownDisplayed)}
                            />
                        </UserNav>
                    </Content>
                </Container>
            </Wrapper>
        </StyledHeader>
    );
}


export default Header;