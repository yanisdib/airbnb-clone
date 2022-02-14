import styled from 'styled-components';


export default styled.button`
    --btn-default-color: #FFFFFF;
    --btn-alt-color: #222222;
    --btn-font-size: 16px;
    --btn-font-weight: 500;
    --btn-line-height: 20px;
    --btn-justify-content: flex-start;
    --btn-padding-y: 14px;
    --btn-padding-x: 24px;

    display: flex;
    justify-content: var(--btn-justify-content);
    width: fit-content;
    height: fit-content;
    background: var(${({ variant }) => variant ? '--btn-alt-color' : '--btn-default-color'});
    color: var(${({ variant }) => variant ? '--btn-default-color' : '--btn-alt-color'});
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    line-height: var(--btn-line-height);
    padding: var(--btn-padding-y) var(--btn-padding-x);
    border-radius: 12px;
`;