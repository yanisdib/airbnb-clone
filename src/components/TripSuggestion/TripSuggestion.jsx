import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid';

import { Container, CardGrid } from '..';


const Section = styled.div`
    --mls-ct-bg: #D93B30;

    --tl-color: #FFFFFF;
    --tl-font-size: 35px;
    --tl-font-weight: 600;
    --tl-letter-spacing: -0.01em;
    --tl-line-height: 39px;

    --sub-font-size: 21px;
    --sub-font-weight: 400;
    --sub-letter-spacing: -0.01em;
    --sub-line-height: 39px;

    --mls-sc-spt-xs: 48px;
    --mls-sc-spb-xs: 0px;
    --mls-sc-spt-sm: 48px;
    --mls-sc-spb-sm: 0px;
    --mls-sc-spt-md: 64px;
    --mls-sc-spb-md: 0px;
    --mls-sc-spt-lg: 96px;
    --mls-sc-spb-lg: 0px;
    --mls-sc-spt-xl: 96px;
    --mls-sc-spb-xl: 0px;

    @media (min-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: center;
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
`;

const Content = styled.div`
    display: flex;
`;

const CityCard = styled.div`
    width: 100%;
    height: 510px;
    background-color: var(--mls-ct-bg, none);
    border-radius: 12px;;
`;

const CardTitle = styled.h2`
    max-width: 100%;
    font-size: var(--tl-font-size, 32px);
    font-weight: var(--tl-font-weight, 800);
    color: var(--tl-color, #222222);
    letter-spacing: var(--tl-letter-spacing, 0em);
    line-height: var(--tl-line-height, 36px);
    white-space: pre-line;
`;

const CityDistance = styled.span`
    font-size: var(--sub-font-size, 14px);
    font-weight: var(--sub-font-weight, 400);
    color: var(--tl-color, #717171);
    letter-spacing: var(--sub-letter-spacing, 0em);
    line-height: var(--sub-line-height, 18px);
`;


function TripSuggestion() {
    const suggestedCities = [
        { 'Barcelonette': { distanceInKm: 152 } },
        { 'Vars': { distanceInKm: 172 } },
        { 'Allos': { distanceInKm: 136 } },
        { 'Porto Vecchio': { distanceInKm: 323 } }
    ];

    const suggestedCitiesCards = suggestedCities.map(city => {
        return (
            <CityCard key={uuidv4()}>
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