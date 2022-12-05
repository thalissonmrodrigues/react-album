import styled from 'styled-components';

export const AlbumItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-radius: 10px;
    padding: 15px;
    font-weight: 500;
    color: #3A4B5C;
    transition: all ease .3s;

    a {
        color: #3A4B5C;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            opacity: .8;
        }
    }
`;