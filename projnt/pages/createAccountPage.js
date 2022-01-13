import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react';
import BackBtn from '../components/BackBtn';
import InputForm from '../components/InputForm';
import CreateAccountForms from '../components/CreateAccountForms';
import ProceedBtn from '../components/ProceedBtn';
import Logo from '../components/Logo';
import capic from '../public/image-1.png'
import TitleNDesc from '../components/TitleNDesc';
import { Form } from '../components/Form';



function createAccountPage() {

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
      await fetch("http://localhost:3333/register", {
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
        <title>Create Account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' />
      </Head>

      <div className='contatiner-createPage'>

        <BackBtn />
        
        <CreateAccountForms>
        <Form onSubmit={onSubmit}>
          <TitleNDesc className= "register-head" title="Register" description="Create your account right now! It's fast and easy!"/>
          <InputForm className="input-form-create" id="username-create" name="username" label="Username"  handleInput={handleInput} value={formLogin.username}/>
          <InputForm className="input-form-create" id="email-create" type="email" name="email" label="Email"  handleInput={handleInput} value={formLogin.email}/>
          <InputForm className="input-form-create" id="password-create" type="password" name="password" label="Password"  handleInput={handleInput} value={formLogin.password} />
          <InputForm className="input-form-create" id="password-confirmation" type="password" name="confirmPassword" label="Repeat Password"  handleInput={handleInput} value={formLogin.confirmPassword}/>
          <ProceedBtn btnId="btn-register" text="Register" />
        </Form>
        </CreateAccountForms>
        <Logo logoType="create-page-logo" classDiv='register-img'>
        <Image  src={capic}/>
        </Logo>




      </div>

    </div>

  )
}

export default createAccountPage
