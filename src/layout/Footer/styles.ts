import styled from 'styled-components';

export const Footer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #3A4B5C;

    a {
        text-decoration: none;
        color: #3A4B5C;

        &:hover {
            opacity: .8;
        }
    }
`;