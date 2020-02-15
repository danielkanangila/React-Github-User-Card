import React from 'react';
import styled from 'styled-components';

class User extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {login, avatar_url, name, location, blog, html_url, followers, following, bio} = this.props;
        return(
            <UserBlock>
                <div className="user-avatar">
                    <img src={avatar_url} />
                </div>
                <div className="user-info">
                    <h1 className="user-name">
                        {name}
                        <span>{login}</span>
                    </h1>
                    <p className="user-details">{bio ? bio : 'Bio:'}</p>
                    <p className="user-details">
                        <i className="fas fa-map-marker-alt icon"></i>
                        {location ? location : '-'}
                    </p>
                    <a href={blog} className="user-details">
                        <i className="fas fa-link icon"></i>
                        {blog ? blog : '-'}
                    </a>
                    <a href={html_url} className="user-details">
                        <i className="fab fa-github icon"></i>
                        Github
                    </a>
                </div>
            </UserBlock>
        )
    }
}

const UserBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    @media (min-width: 1024px) {
        flex-direction: column;
        width: 250px;
        margin-right: 20px;
    }

    .icon {
        color: #9e9e9e;
        margin-right: 10px;
    }

    .user {
        &-details {
            font-size: 0.9rem;
            line-height: 1.5rem;
            display: block
        }
        &-info {
            margin-left: 20px;
            @media (min-width: 1024px) {
                margin-left: 0;
                margin-top: 16px;
            }
        }
        &-name {
            font-size: 26px;
            margin-top: -5px;
            margin-bottom: 10px;
            padding: 0;
            span {
                display: block;
                font-size: 18px;
                font-weight: normal;
                color: #9e9e9e;
            }
        }
        
        &-avatar {
            width: 150px;
            height: 150px;
            overflow: hidden;
            border-radius: 5px;
            border: 1px solid #ccc;
    
            img {
                width: 100%;
            }
    
            @media (min-width: 1024px) {
                width: 250px;
                height: 250px; 
            }
        }
    }
`;

export default User;