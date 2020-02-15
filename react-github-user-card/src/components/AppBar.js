import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, TextField } from './';

const Nav = styled.nav`
    width: 100%;
    box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.07);

    .app-bar {
        display: flex;
        justify-content: flex-end;
    }
    
    .search-field {
        display: flex;
        align-items: center;
        padding: 16px;
        width: 100%;

        @media (min-width: 750px) {
            width: 40%;
        }
        
        label {
            text-transform: uppercase;
            margin-right: 15px;
            font-size: 0.8rem;
        }
    }
`;

const AppBar = props => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
        props.onSearch(e.target.value);
    }

    return(
        <Nav>
            <Container className="app-bar">
                <div className="search-field">
                    <label htmlFor="searc">Search:</label>
                    <TextField value={query} onChange={handleChange} type="text" name="search" placeholder="Github Username"  />
                </div>
            </Container>
        </Nav>
    )
}

export default AppBar;