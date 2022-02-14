import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

import { Container, CardGrid } from '..';

import barcelonetteThumbnail from '../../assets/images/barcelonette-thumbnail.jpg';
import varsThumbnail from '../../assets/images/vars-thumbnail.jpg';
import allosThumbnail from '../../assets/images/allos-thumbnail.jpg';
import portoVecchioThumbnail from '../../assets/images/porto-vecchio-thumbnail.jpg';


const Section = styled.div`
    --mls-ct-bg: #D93B30;

    --tl-color: #FFFFFF;
    --tl-font-size: 35px;
    --tl-font-weight: 600;
    --tl-letter-spacing: -0.01em;
    --tl-line-height: 39px;

    --sub-font-size: 21px;
    --sub-font-weight: 300;
    --sub-letter-spacing: -0.01em;
    --sub-line-height: 22px;

    @media (min-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #FFFFFF;
        padding-top: var(--mls-sc-spt-xs);
        padding-bottom: var(--mls-sc-spb-xs);
    }

    @media (min-width: 744px) {
        display: flex;
        background: #FFFFFF;
        padding-top: var(--mls-sc-spt-sm);
        padding-bottom: var(--mls-sc-spb-sm);
    }

    @media (min-width: 950px) {
        display: flex;
        background: #FFFFFF;
        padding-top: var(--mls-sc-spt-md);
        padding-bottom: var(--mls-sc-spb-md);
    }

    @media (min-width: 1128px) {
        display: flex;
        background: #FFFFFF;
        padding-top: var(--mls-sc-spt-lg);
        padding-bottom: var(--mls-sc-spb-lg);
    }

    @media (min-width: 1440px) {
        display: flex;
        background: #FFFFFF;
        padding-top: var(--mls-sc-spt-xl);
        padding-bottom: var(--mls-sc-spb-xl);
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: inherit;    
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;

    h1 {
        display: flex;
        flex-direction: row;
        max-width: 100%;
        font-size: 38px;
        font-weight: 600;
        color: #222222;
        letter-spacing: var(--tl-letter-spacing, 0em);
        white-space: pre-line;
        padding-bottom: 48px;
    }
`;

const CityCard = styled.div`
    width: 100%;
    height: 510px;
    background-color: var(--mls-ct-bg, none);
    border-radius: 12px;
    white-space: pre-line;

    img {
        width: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        object-fit: contain;
    }
`;

const CardTitle = styled.h2`
    max-width: 100%;
    font-size: var(--tl-font-size, 32px) !important;
    font-weight: var(--tl-font-weight, 800) !important;
    color: var(--tl-color, #222222) !important;
    letter-spacing: var(--tl-letter-spacing, 0em) !important;
    line-height: var(--tl-line-height, 36px) !important;
    white-space: pre-line;
    padding: 24px 16px 16px;
`;

const CityDistance = styled.h3`
    max-width: 100%;
    font-size: var(--sub-font-size, 14px);
    font-weight: var(--sub-font-weight, 400);
    color: var(--tl-color, #717171);
    letter-spacing: var(--sub-letter-spacing, 0em);
    line-height: var(--sub-line-height, 18px);
    padding: 0px 16px 16px;
    white-space: pre-line;
`;


function TripSuggestion() {
    const suggestedCities = [
        { 'Barcelonette': { distanceInKm: 152, img: barcelonetteThumbnail } },
        { 'Vars': { distanceInKm: 172, img: varsThumbnail } },
        { 'Allos': { distanceInKm: 136, img: allosThumbnail } },
        { 'Porto Vecchio': { distanceInKm: 323, img: portoVecchioThumbnail } }
    ];

    const suggestedCitiesCards = suggestedCities.map(city => {
        return (
            <CityCard key={uuidv4()}>
                <img src={city[`${Object.keys(city)}`]["img"]} />
                <CardTitle>{Object.keys(city)}</CardTitle>
                <CityDistance>
                    {city[`${Object.keys(city)}`]["distanceInKm"]} kilometers away
                </CityDistance>
            </CityCard>
        );
    });


    return (
        <Section>
            <Wrapper>
                <Container>
                    <Content>
                        <h1>Inspiration for your next trip</h1>
                        <CardGrid>
                            {suggestedCitiesCards}
                        </CardGrid>
                    </Content>
                </Container>
            </Wrapper>
        </Section>
    )
}


export default TripSuggestion;