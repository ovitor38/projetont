import Image from 'next/image'
import Head from 'next/head'
import BackBtn from '../components/BackBtn';
import InputForm from '../components/InputForm';
import CreateAccountForms from '../components/CreateAccountForms';
import ProceedBtn from '../components/ProceedBtn';
import Logo from '../components/Logo';
import capic from '../public/image-1.png'
import TitleNDesc from '../components/TitleNDesc';
import { Form } from '../components/Form';

import { useForm } from "react-hook-form";
import React from "react";
import { useState } from 'react';
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'


function createAccountPage() {

  
  const router = useRouter()


  const [formLogin, setFormLogin] = useState({});
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const handleInput = (event) => {
    const key = event.target.getAttribute('name');
    const value = event.target.value;
    console.log(key, value)
    setFormLogin({
      ...formLogin,
      [key]: value
    })
  }

  const onSubmit = async (event) => {     

    try {
      const response = await fetch("http://localhost:3333/register", {
        method: "POST",
        body: JSON.stringify(formLogin),
        headers: { 'Content-Type': 'application/json' }

      })

      const message = await response.text();
      if (response.ok) router.push('/')

      if (!response.ok) throw new Error(JSON.parse(message).error)

      alert('Registrado')

    } catch (error) {
      console.log(error.message)     
    }
  }

  const password = watch('password')
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

          <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleNDesc className="register-head" title="Register" description="Create your account right now! It's fast and easy!" />

            <InputForm className="input-form" id="usernameRegister" errors={errors} type='text' options={{ required: { value: true, message: "You need to enter a username" } }}
              registerForm={register} name="username" label="Username" handleInput={handleInput} value={formLogin.username} />


            <InputForm className="input-form" id="emailRegister" errors={errors} type='text' options={{ required: { value: true, message: "You need to enter a email" },
             pattern:{value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,message: "Enter a valid email"}}}
              registerForm={register} name="email" label="E-mail" handleInput={handleInput}  value={formLogin.username}/>

            <InputForm className="input-form" id="passwordRegister" errors={errors} type='password'options={{ required: {value: true, message: "You need to enter a password"}, 
            minLength: {value: 6, message:"Your password must contain at least 6 characters"}}}
              registerForm={register} name="password" label="Password" handleInput={handleInput} value={formLogin.password} />

            <InputForm className="input-form" id="passwordConfirmation" errors={errors} type='password' options={{ required: { value: true, message: "You need to enter a password "},
               validate: (value) => value === password || "Passwords don't match"}}           
              registerForm={register} name="confirmPassword" label="Confirm Password" handleInput={handleInput} value={formLogin.confirmPassword} />

            <ProceedBtn btnId="btn-register" text="Register" />
          </Form>
        </CreateAccountForms>
        <Logo logoType="create-page-logo" classDiv='register-img'>
          <Image src={capic} />
        </Logo>




      </div>

    </div>

  )
}

export default createAccountPage
