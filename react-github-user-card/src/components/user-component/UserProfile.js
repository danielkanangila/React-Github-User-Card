import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';
import { UserGraphContainer } from './UserGraph';

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
                        <UserGraphContainer className="graph-container">
                            <h2 className="loading">Loading...</h2>
                        </UserGraphContainer>
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
`;

const Error = styled.h1`
    text-align: center;
    color: #bdbdbd;
    padding: 20px;
    text-align: center;
    width: 100%;
`;

export default UserProfile;