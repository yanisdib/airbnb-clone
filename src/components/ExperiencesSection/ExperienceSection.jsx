import styled from 'styled-components';

import { Button } from '..';


const Section = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    display: flex;
`;

const Content = styled.div`
    display: flex;
`;
const TripExperiences = styled.div`
    display: flex;
`;

const HomeExperiences = styled.div`
    display: flex;
`;


function Experiencesection() {
    return (
        <Section>
            <Wrapper>
                <Content>
                    <TripExperiences>
                        <Button />
                    </TripExperiences>
                    <HomeExperiences>
                        <Button />
                    </HomeExperiences>
                </Content>
            </Wrapper>
        </Section>
    );
}


export default Experiencesection;