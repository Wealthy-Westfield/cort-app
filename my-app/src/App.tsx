import React, { useState, useEffect } from 'react';
import { Card, CardContent, Form, Icon, Image } from 'semantic-ui-react';
import './App.css';
import Repo from './Repo'
//import Repository from './Repo'

function App() {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/example')
        .then(res => res.json())
        .then(data => {
            setData(data)
        });
    }, []);

    interface IProps {
        name: string;
        login: string;
        followers: string;
        following: string;
        public_repos: string;
        avatar_url: string;
    }

    const setData = ({ 
        name, 
        login, 
        followers, 
        following, 
        public_repos, 
        avatar_url
    }: IProps) => {
        setName(name)
        setUsername(login)
        setFollowers(followers)
        setFollowing(following)
        setRepos(public_repos)
        setAvatar(avatar_url)
        
    };

    const handleSearch = (e: any) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    setError(data.message)
                }
                else{
                    setData(data);
                    setError(null);
                }   
            })
    }
    
    

    return (
        <div className="wrapper">
            <div className='navbar'>Github Search</div>
            <div className='search'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Github user'
                            name='github user'
                            onChange={handleSearch}
                        />
                        <Form.Button content='Search' />
                    </Form.Group>
                </Form>
            </div>
            
            {error ? (<h1>{error}</h1>) : (
                <div className="card">
                <Card>
                    <Image
                    src={avatar}
                    wrapped
                    ui={false}
                    />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Header>{userName}</Card.Header>
                        <Card.Meta>
                            <span className='date'></span>
                        </Card.Meta>
                        <Card.Description>
                            
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {followers} Followers

                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {following} Followers

                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='book' />
                            {repos} Repositories

                        </a>
                    </Card.Content>
                </Card>
            </div>
            )}
            {error ? (<h1>{error}</h1>) : (
             <Repo username = {userName} /> 
            )}
            {/* <Repository /> */}
            

            {/* <div>
                {body}
            </div> */}
            
             
        </div>
    );
}

export default App;