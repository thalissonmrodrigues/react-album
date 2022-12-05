import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3A4B5C;
`;

export const BackButton = styled.div`
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 7px 14px;
    border-radius: 20px;
    color: #3A4B5C;
    border: #3A4B5C solid 2px;
    font-weight: 500;
    font-size: 14px;

    &:hover {
        background-color: #3A4B5C;
        color: #fff;
    }
`;