import styled from 'styled-components'

import { Container } from '..';

import whiteLogo from '../../assets/svg/logo-original-w.svg';


const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    --header-brand-color: #FF385C;
    background-color: var(--ui-brand-color);
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
    width: 100%;
`;

const Logo = styled.div`
    display: flex;
`;

const SearchNav = styled.div`
    display: flex;
`;

const UserNav = styled.div`
    display: flex;
`;


function Header() {
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

                        </SearchNav>
                        <UserNav>

                        </UserNav>
                    </Content>
                </Container>
            </Wrapper>
        </StyledHeader>
    );
}


export default Header;