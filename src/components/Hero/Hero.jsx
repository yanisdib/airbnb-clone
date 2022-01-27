import styled from 'styled-components';

import { Container } from '..';

import bannerImage from '../../assets/images/flexible-banner.jpg';


const HeroSection = styled.section`
    --sc-spt-xs: 0px;
    --sc-spb-xs: 0px;
    --sc-spt-sm: 0px;
    --sc-spb-sm: 0px;
    --sc-spt-md: 230px;
    --sc-spb-md: 0px;
    --sc-spt-lg: 176px;
    --sc-spb-lg: 96px;
    --sc-spt-xl: 176px;
    --sc-spb-xl: 96px;

    --banner-min-height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    --hero-text-color: #FFFFFF; 
    background-color: var(--ui-brand-color);

`;

const Wrapper = styled.div`
    @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: var(--sc-spt-xs);
        padding-bottom: var(--sc-spt-xs);
    }
    @media (min-width: 744px) {
        padding-top: var(--sc-spt-sm);
        padding-bottom: var(--sc-spt-sm)
    }    
    
    @media (min-width: 950px) {
        padding-top: var(--sc-spt-md);
        padding-bottom: var(--sc-spt-md)
    }

    @media (min-width: 1128px) {
        padding-top: var(--sc-spt-lg);
        padding-bottom: var(--sc-spt-lg)
    }

    @media (min-width: 1440px) {
        padding-top: var(--sc-spt-xl);
        padding-bottom: var(--sc-spt-xl)
    }
`;

const Content = styled.div`
    @media (min-width: 375px) {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        justify-content: flex-end;
        align-items: center;
        width: inherit;
        height: 100%;
        min-height: 800px;
        max-height: 800px;
        background-image: url(${bannerImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 0px;
        padding-bottom: 72px;
    }

    @media (min-width: 744px) {
        border-radius: 0px;
    }

    @media (min-width: 1128px) {
        border-radius: 12px;
    }

    
`;

const Heading = styled.h2`
    @media (min-width: 375px) {
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 80px;
        letter-spacing: -1.5px;
        color: var(--hero-text-color);
    }

    @media (min-width: 744px) {
        font-size: 2rem;
    }

    @media (min-width: 1128px) {
        font-size: 2.92rem;
    }
`;

const Button = styled.span`
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    width: fit-content;
    height: fit-content;
    border-radius: 5em;    
    cursor: pointer;
`;

const ButtonText = styled.span`
    background: linear-gradient(90deg, rgb(111, 1, 156) 0%, rgb(198, 1, 126) 135.12%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 13.5px 34px;
    font-size: 17.5px;
    font-weight: 600;
    letter-spacing: -0.1px;
    line-height: 29px;
`;


function Hero() {
    return (
        <HeroSection>
            <Wrapper>
                <Container>
                    <Content>
                        <Heading>
                            Not sure where to go? Perfect.
                        </Heading>
                        <Button>
                            <ButtonText>
                                I'm flexible
                            </ButtonText>
                        </Button>
                    </Content>
                </Container>
            </Wrapper>
        </HeroSection>
    );
}


export default Hero;