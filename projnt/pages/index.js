import Head from 'next/head'
import loginpic from '../public/image.png'
import TitleNDesc from '../components/TitleNDesc';
import LoginFooter from '../components/LoginFooter';
import ProceedBtn from '../components/ProceedBtn';
import Signup from '../components/signup';
import ForgotPassword from '../components/ForgotPassword';
import LoginBox from '../components/LoginBox';
import Logo from '../components/Logo';
import InputForm from '../components/InputForm'
import RememberCheckbox from '../components/Remember-Checkbox';
import { Form } from '../components/Form';

import Image from 'next/image'
import { useState } from 'react';
import { Header } from 'styled-icons/open-iconic';
import Script from 'next/script';

function Home() {

  const [formLogin, setFormLogin] = useState({});

  const handleInput = (event) => {
    const key = event.target.getAttribute('name');
    const value = event.target.value;

    setFormLogin({
      ...formLogin,
      [key]: value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(formLogin);

    try {
      await fetch("http://localhost:3333/login", {
        method: "POST",
        body: JSON.stringify(formLogin),
        headers: { 'Content-Type': 'application/json' }

      })

    } catch (error) {
      console.log("Não foi possível conectar")

    }
  }

  return (

    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <div className="container-index">
        <Logo logoType="login-logo" classDiv="login-image">
          <Image
            src={loginpic}
          />

        </Logo>

        <LoginBox>
          <Form onSubmit={onSubmit}>
            <TitleNDesc className="login-head" title="Login" description="Welcome! log in and take the opportunty to update your to-do list" />


            <InputForm className="input-form" id="username" type='text' name="username" label="Username" handleInput={handleInput} value={formLogin.username} />
            <InputForm className="input-form" id="password" type="password" name="password" handleInput={handleInput} value={formLogin.password} label="Password" />
            <RememberCheckbox />
            <ProceedBtn divName="btn-container" btnId="btn-login" text="Login" />

            <LoginFooter>
              <Signup />
              <ForgotPassword />
            </LoginFooter>
          </Form>
        </LoginBox>
      </div>
     

    </div>

  )
}
export default Home;
