import React from 'react';
import {
  StyledTextInput, StyledLabel, StyledFormedArea,
  StyledFormedButton, Avatar, StyledTitle, colors, ButtonGroup
} from './../components/Styles';
import Logo from "./../assets/logo.png"

import { Formik, Form, yupToFormErrors } from 'formik';

import { Textinput } from '../components/FormLib';
import { FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

const Login = () => {
  return (
    <div>
      <StyledFormedArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30} >Member Login</StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={
            Yup.object({
              email: Yup.string().email("Invalid Email Address").required("Required"),
              password: Yup.string().min("8", "password is too short").max("30", "password is to long").required("Required")
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Textinput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc@mail.com"
                icon={<FiMail />}
              />
              <Textinput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                <StyledFormedButton
                  type="submit">
                  Login
                </StyledFormedButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormedArea>
    </div>
  )
}

export default Login