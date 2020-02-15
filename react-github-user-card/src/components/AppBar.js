import React from 'react';
import styled from 'styled-components';
import { Container } from './';
import Search from './search/Search';

class AppBar extends React.Component {

    render() {

        return(
            <Nav>
                <Container className="app-bar">
                    <Search onSearch={this.props.onSearch} />
                </Container>
            </Nav>
        )
    }

}

const Nav = styled.nav`
    width: 100%;
    box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.07);
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 900;

    .app-bar {
        display: flex;
        justify-content: flex-end;
    }

`;

export default AppBar;