import React, { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import {MainContent, Container, CardSearch, CardSearchHeader, CardSearchTitle, ContentInput, Input, Button, MessageNotification } from './styles';
import { connect } from 'react-redux';
import * as UserActions from '../../store/modules/user/actions';


 function Main({ onSetUserName }) {
    const [userGithub, setUserGithub] = useState({ user: '' });
    const [notification, setNotification] = useState(false);

    function handleSerchRepositories(user){
        userGithub.user ? onSetUserName(user) : setNotification(true);
    }

  return (
    <MainContent>
        <Container>
            <CardSearch>
                <CardSearchHeader>
                    <FaGithubAlt/>
                    <CardSearchTitle>Busque um usuário do Github</CardSearchTitle>
                </CardSearchHeader>


                <MessageNotification show={notification}>Insira um usuário do Github</MessageNotification>

                <ContentInput>
                    <Input type="text" placeholder="Digite um usuário" onChange={(e) => setUserGithub({ ...userGithub, user: e.target.value }) } />
                    <Button onClick={() => handleSerchRepositories(userGithub.user)}  to={userGithub.user ? `/repository` : `/`} >Buscar</Button>
                </ContentInput>
            </CardSearch>
        </Container>
    </MainContent>
  );
}

const mapDispatchToProps = dispatch => ({
    onSetUserName: userName => dispatch(UserActions.setUserNameGithub(userName)),
});

export default connect(
    null,
    mapDispatchToProps
)(Main);
