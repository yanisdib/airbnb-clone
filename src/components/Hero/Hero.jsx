import styled from 'styled-components';

import { Container } from '..';

import bannerImage from '../../assets/images/flexible-banner.jpg';


const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    --hero-text-color: #FFFFFF; 
    background-color: var(--ui-brand-color);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: inherit;
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