import styled from 'styled-components';

import { Container } from '..';

import bannerImage from '../../assets/images/flexible-banner.jpg';


const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    background-color: var(--ui-brand-color);
`;

const Wrapper = styled.div`
    display: flex;
    height: inherit;
`;

const Content = styled.div`
    display: flex;
    width: inherit;
    height: 100%;
    max-height: 800px;
    background-image: url(${bannerImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
`;


function Hero() {
    return (
        <HeroSection>
            <Wrapper>
                <Container>
                    <Content>

                    </Content>
                </Container>
            </Wrapper>
        </HeroSection>
    );
}


export default Hero;