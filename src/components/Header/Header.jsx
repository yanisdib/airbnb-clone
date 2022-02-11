import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Language } from '@styled-icons/material';

import useAutocompletedCities from '../../hooks/useAutocompletedCities';
import useFormField from '../../hooks/useFormField';

import { Container, MenuButton, MenuDropdown, SearchBar } from '..';

import whiteLogo from '../../assets/svg/logo-original-w.svg';
import originalLogo from '../../assets/svg/logo-original.svg';


const StyledHeader = styled.header`
    display: flex;
    position: ${({ isWindowScrolled }) => isWindowScrolled ? 'fixed' : 'absolute'};
    flex-direction: row;
    --header-brand-color: #FF385C;
    background-color: ${({ isWindowScrolled }) => isWindowScrolled ? '#FFFFFF' : 'var(--ui-brand-color)'};
    color: ${({ isWindowScrolled }) => isWindowScrolled ? 'var(--ui-brand-color)' : '#FFFFFF'};
    fill: ${({ isWindowScrolled }) => isWindowScrolled ? 'var(--ui-brand-color)' : '#FFFFFF'};
    padding: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: transparent;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const Logo = styled.div`
    display: flex;
    flex: 1 0 140px;
`;

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: 850px;
    margin: 0 auto;
`;

const SearchTabsGroup = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
`;

const SearchTab = styled.div`
    display: flex;
    position: relative;
    text-align: center;
    font-size: 15.5px;
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
    position: relative;
    justify-content: flex-end;
    align-items: center;
    height: 80px;

    &:last-of-type div{
        margin-left: 8px;
    }

    button {
        width: fit-content;
        height: fit-content;
        background: transparent;
        color: inherit;
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
            stroke-width: 1px;
            height: 20px;
        }
    }
`;


function Header() {
    const [searchedLocation, setSearchedLocation] = useFormField('');

    const [isMenuDropdownDisplayed, setIsMenuDropdownDisplayed] = useState(false);
    const [isCheckInDateDropdownDisplayed, setIsCheckInDateDropdownDisplayed] = useState(false);
    const [isCheckOutDateDropdownDisplayed, setIsCheckOutDateDropdownDisplayed] = useState(false);
    const [isGuestsDropdownDisplayed, setIsGuestsDropdownDisplayed] = useState(false);
    const [isWindowScrolled, setIsWindowScrolled] = useState(false);
    const [logo, setLogo] = useState(whiteLogo);

    const autocompletedCities = useAutocompletedCities(searchedLocation);

    const changeHeaderOnScroll = () => {
        if (window.scrollY > 5) {
            setIsWindowScrolled(true)
            setTimeout(() => setLogo(originalLogo), 100)
        }
        else {
            setIsWindowScrolled(false)
            setTimeout(() => setLogo(whiteLogo), 100)
        }
    }

    useEffect(() => window.addEventListener('scroll', changeHeaderOnScroll), [])

    return (
        <StyledHeader isWindowScrolled={isWindowScrolled}>
            <Wrapper>
                <Container>
                    <Content>
                        <Logo>
                            <iframe src={logo} width={102} height={80}>
                                <img src={logo} width={102} height={80} />
                            </iframe>
                        </Logo>
                        <SearchForm>
                            {
                                // TODO: onClick the current Active Tab changes with state (1 as default) taking the current selected Tab
                            }
                            {
                                !isWindowScrolled && (
                                    <>
                                        <SearchTabsGroup>
                                            <SearchTab isSearchTabActive={true}>Places to stay</SearchTab>
                                            <SearchTab>Experiences</SearchTab>
                                            <SearchTab>Online Experiences</SearchTab>
                                        </SearchTabsGroup>
                                        <SearchBar
                                            setLocation={setSearchedLocation}
                                            displayCheckInDateDropdown={() => setIsCheckInDateDropdownDisplayed(prevState => !prevState)}
                                            displayCheckOutDateDropdown={() => setIsCheckOutDateDropdownDisplayed(prevState => !prevState)}
                                            displayGuestsDropdown={() => setIsGuestsDropdownDisplayed(prevState => !prevState)}
                                        />
                                    </>
                                )
                            }
                        </SearchForm>
                        <UserNav>
                            {isMenuDropdownDisplayed && <MenuDropdown />}
                            <button>Become a Host</button>
                            <button>
                                <Language />
                            </button>
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