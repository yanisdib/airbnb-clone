import styled from 'styled-components';


export default styled.div`
    @media (min-width: 375px) {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        row-gap: 24px;
        column-gap: 24px;
    }

    @media (min-width: 744px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 950px) {
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 1128px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;