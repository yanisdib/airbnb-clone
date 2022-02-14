import styled from 'styled-components';

import { Button, Container } from '..';

import experiencesImage from '../../assets/images/experiences-banner.jpg';
import onlineExperiencesImage from '../../assets/images/online-experiences-banner.jpg';


const Section = styled.div`
    @media (min-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: var(--mls-sc-spt-xs);
        padding-bottom: var(--mls-sc-spb-xs);
        border-radius: 12px;
    }

    @media (min-width: 744px) {
        padding-top: var(--mls-sc-spt-sm);
        padding-bottom: var(--mls-sc-spb-sm);
    }

    @media (min-width: 950px) {
        padding-top: var(--mls-sc-spt-md);
        padding-bottom: var(--mls-sc-spb-md);
    }

    @media (min-width: 1128px) {
        padding-top: var(--mls-sc-spt-lg);
        padding-bottom: var(--mls-sc-spb-lg);
    }

    @media (min-width: 1440px) {
        padding-top: var(--mls-sc-spt-xl);
        padding-bottom: var(--mls-sc-spb-xl);
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    column-gap: 24px;

    h1 {
        display: flex;
        max-width: 100%;
        font-size: 38px;
        font-weight: 600;
        color: #222222;
        letter-spacing: var(--tl-letter-spacing, 0em);
        white-space: pre-line;
        padding-bottom: 48px;
    }
`;

const Banner = styled.div`
    --tl-color: #FFFFFF;
    --tl-font-size: 52px;
    --tl-font-weight: 500;
    --tl-letter-spacing: -0.05em;
    --tl-line-height: 60px;   

    display: flex;
    flex-direction: column;
    flex: 1 0 0%;
    border-radius: 12px;
    height: 788px;

    h3 {
        flex-direction: row;
        width: 55%;
        max-width: 100%;
        color: var(--tl-color);
        font-size: var(--tl-font-size);
        font-weight: var(--tl-font-weight);
        letter-spacing: var(--tl-letter-spacing);
        line-height: var(--tl-line-height);
        white-space: pre-line;
        padding-bottom: 24px;
    }
`;

const BannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 24px;
    width: 100%;
`;

const TripExperiences = styled(Banner)`
    background-image: url(${experiencesImage});
    background-size: cover;
    background-position: center;
    padding: 80px;
`;

const HomeExperiences = styled(Banner)`
    background-image: url(${onlineExperiencesImage});
    background-size: cover;
    background-position: center;
    padding: 80px;
`;


function Experiencesection() {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Content>
                        <h1>Discover Airbnb Experiences</h1>
                        <BannerWrapper>
                            <TripExperiences>
                                <h3>Things to do on your trip</h3>
                                <a><Button>Experiences</Button></a>
                            </TripExperiences>
                            <HomeExperiences>
                                <h3>Things to do from home</h3>
                                <a><Button>Online Experiences</Button></a>
                            </HomeExperiences>
                        </BannerWrapper>
                    </Content>
                </Container>
            </Wrapper>
        </Section>
    );
}


export default Experiencesection;