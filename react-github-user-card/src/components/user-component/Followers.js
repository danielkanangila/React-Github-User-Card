import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Error } from './../'

class Followers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            followers: [],
            errors: '',
        }
    }

    componentDidUpdate() {
        axios.get(this.props.url)
        .then(res => {
            if (this.state.followers[0]?.id !== res.data[0].id) {
                this.setState({followers: res.data})
            }
        })
        .catch(err => this.setState({errors: err.message}))
    }

    render() {
        return(
            <Wrapper>
                <h2>
                    Followers
                    <span>{this.props.count}</span>
                </h2>
                {this.state.errors && 
                    <Error>
                        {this.state.errors}
                    </Error>
                }
                {this.state.followers.map(follower => <Follower key={follower.id} handleClick={this.props.handleClick} {...follower} />)}
            </Wrapper>
        )
    }
}

const Follower = props => {
    const { login, avatar_url } = props;
    return(
        <FollowerWrapper>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
        </FollowerWrapper>
    )
}

const FollowerWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    padding: 10px;
    transition: all .3s;
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
    }
    h3 {
        margin-left: 10px;
    }
    &:hover {
        background-color: #ccc;
    }
`

const Wrapper = styled.div`
    margin: 30px 0;
    h2 {
        background-color: #dddddd;
        padding: 16px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-content: center;

        span {
            display: block;
            width: 25px;
            height: 25px;
            text-align: center;
            padding-top: 5px;
            margin-left: 10px;
            border-radius: 50%;
            background-color: #2196f3;
            color: #fff;
            font-size: 0.8rem;
            font-weight: normal;
        }
    }
`

export default Followers