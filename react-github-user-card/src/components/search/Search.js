import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TextField } from "./../";
import SuggestedUserList from './SuggestedUserList';

const BASE_URL = 'https://api.github.com/search/users?q='

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            onSearch: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        
        if (e.target.value) {
            this.setState({
                query: e.target.value,
                onSearch: true
            })
            axios.get(`${BASE_URL}${e.target.value}`)
            .then(res => {
                this.setState({
                    results: res.data.items
                })
            })
        } else {
            this.setState({
                query: e.target.value,
                onSearch: false
            })
        }
        //this.props.onSearch(e.target.value);
    }

    onUserSelected = data => {
        this.setState({
            query: data.login,
            onSearch: false
        });
        this.props.onSearch(data.url);
    }

    render() {
        return(
            <Wrapper>
                <label htmlFor="searc">Search:</label>
                <TextField 
                    value={this.state.query} 
                    onChange={this.handleChange} 
                    type="text" name="search" 
                    placeholder="Github Username"  />
                {this.state.onSearch &&
                    <SuggestedUserList onUserSelected={this.onUserSelected} items={this.state.results} />
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    width: 100%;
    position: relative;

    @media (min-width: 750px) {
        width: 40%;
    }
        
    label {
        text-transform: uppercase;
        margin-right: 15px;
        font-size: 0.8rem;
    }
`

export default Search;