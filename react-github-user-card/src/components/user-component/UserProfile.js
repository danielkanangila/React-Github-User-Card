import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';
import { UserGraphContainer } from './UserGraph';
import Followers from './Followers';
import { Error } from './../';

class  UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            errors: ''
        }
    }

    componentDidMount() {
        this.fetchUser(this.props.url);
    }

    componentDidUpdate() {
        this.fetchUser(this.props.url);
    }

    fetchUser = url => {
        axios.get(url)
        .then(res => {
            if (this.state.user.id !== res.data.id) {
                new window.GitHubCalendar('.graph-container', res.data.login, {responsive: true})
                this.setState({user: res.data})
            }
        })
        .catch(err => this.setState({errors: err.message}));
    }

    render() {
        return(
            <Wrapper>
                {this.state.errors && 
                    <Error>
                        {this.state.errors}
                    </Error>
                }
                {!this.state.errors &&
                    <>
                        <User {...this.state.user} />
                        <div className="right">
                            <UserGraphContainer className="graph-container">
                                <h2 className="loading">Loading...</h2>
                            </UserGraphContainer>
                            <Followers handleClick={this.props.onUserSelected} url={this.state.user.followers_url} count={this.state.user.followers} />
                        </div>
                    </>
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    .right {
        @media (min-width: 1024px) {
            width: 100%;
        }
    }
`;

export default UserProfile;