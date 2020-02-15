import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';

class  UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            errors: ''
        }
    }

    componentDidMount() {
        const URL = `${this.props.url}${this.props.username}`;
        axios.get(URL)
        .then(res => this.setState({user: res.data}))
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
                <User {...this.state.user} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    
`;

const Error = styled.h1`
    text-align: center;
    color: #bdbdbd;
    padding: 20px;
`;

export default UserProfile;