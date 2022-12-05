import styled from 'styled-components';

export const PhotoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: #3A4B5C solid 1px;
    border-radius: 10px;
    padding: 15px;
    transition: all ease .3s;
    margin: 50px;

    a:hover {
        text-decoration: underline;
        opacity: .8;
    }
`;