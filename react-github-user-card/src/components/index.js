import styled from 'styled-components';

export const Container =  styled.div`
    width: 90%;
    margin: 0 auto;

    @media (min-width: 745px) {
        width: 80%;
    }
`

export const TextField = styled.input`
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 25px;
    width: 100%;
    font-size: 14px;

    &:focus {
        border: 1px solid #2196f3
    }
`

