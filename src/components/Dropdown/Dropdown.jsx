import styled from 'styled-components';


export default styled.div`
    position: absolute;
    width: ${({ width }) => width ? `${width}%` : '100%'};
    min-height: 200px;
    top: 60px;
    right: 0;
    background-color: #FFFFFF;
    border-radius: 12px; 
    z-index: 999;
`;