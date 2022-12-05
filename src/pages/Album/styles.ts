import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    
    
    p, h2 {
        text-align: center;
        font-weight: bold;
        color: #3A4B5C;
    }
`;

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;