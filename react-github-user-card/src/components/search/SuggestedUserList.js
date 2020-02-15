import React from 'react';
import styled from 'styled-components';

class SuggestedUserList extends React.Component {

    render() {
        return(
            <List>
                {this.props.items.map(item => (
                        <ListItem key={item.id} onClick={() => this.props.onUserSelected({url: item.url, login: item.login})}>
                            <img src={item.avatar_url} alt={item.login} />
                            {item.login}
                        </ListItem>
                    )
                )}
            </List>
        )
    }
}

const List = styled.ul`
    position: absolute;
    top: 75px;
    width: 95%;
    z-index: 900;
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.07);
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    max-height: 300px
`

const ListItem = styled.li`
    padding: 15px;
    border-bottom: 1px solid #ccc;
    transition: ease .5s;
    display: flex;
    align-content: center;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
    img {
        width: 26px;
        height: 26px;
        border-radius: 5px;
        margin-right: 10px;
    }
    &:last-child {
        border: none;
    }
`

export default SuggestedUserList;