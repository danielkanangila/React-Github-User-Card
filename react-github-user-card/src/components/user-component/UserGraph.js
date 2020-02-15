import styled from 'styled-components';

export const UserGraphContainer = styled.div`
    width:100%;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px 0;

    @media (min-width: 1024px) {
        margin: 0;
    }

    h2.loading {
        text-align: center;
        padding: 100px;
        color: #919191;
    }
`