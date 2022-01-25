import styled from 'styled-components';

export default styled.div`
    --container-max-width-xs: 1760px;
    --container-max-width-sm: 1760px;
    --container-max-width-md: 1760px;
    --container-max-width-lg: 1760px;
    --container-max-width-xl: 1760px;

    --container-padding-x: 80px !important;


    @media (min-width: 375px) {
        display: flex;
    }

    @media (min-width: 744px) {
        display: flex;
    }

    @media (min-width: 950px) {
        display: flex;
    }

    @media (min-width: 1128px) {
        display: flex;
    }

    @media (min-width: 1440px) {
        display: flex;
        width: 91.666666666667vw;
        max-width: var(--container-max-width-xl);
        padding-left: var(--container-padding-x);
        padding-right: var(--container-padding-x);
    }
`;