import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export function Login() {
  const Navigate = useNavigate();

  const initialValues = { name: "", password: "" };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (data) => {
          await axios
            .post(`http://localhost:3000/login`, {
              username: data.name,
              password: data.password,
            })
            .then(function (response) {
              if (response.data === "Username Or Password incorrect") {
                Navigate("/loginfail");
              } else {
                console.log(response.data);
                Navigate("loginsuccess", data.username);
              }
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>

            <Field id="name" name="name" placeholder="Your Name" />

            <label htmlFor="pasword">Password</label>
            <Field
              id="pasword"
              type="password"
              name="password"
              placeholder="Pasword"
            />

            <label htmlFor="email">Email</label>

            <button type="submit">Login</button>
            {isSubmitting ? <p>Loading</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}
