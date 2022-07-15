import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import Login from '../../components/AuthForms/Login';
import { MainBox } from '../MainPage/MainPage.styled';
import { LoginRegisterWrapper } from './LoginPage.styled';
export default function LoginPage(props) {
  return (
    <Container>
      <MainBox>
        <LoginRegisterWrapper>
          <Login />
        </LoginRegisterWrapper>
      </MainBox>
    </Container>
  );
}

LoginPage.propTypes = {};
