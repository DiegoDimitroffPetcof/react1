import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export function Signout() {
  const Navigate = useNavigate();

  const initialValues = {
    name: "",
    password: "",
    email: "",
    firstName: "",
    secondName: "",
    cellphone: "",
  };

  return (
    <div>
      
      <Formik
        initialValues={initialValues}
        onSubmit={async (data) => {
          console.log(data)
          await axios
            .post(`http://localhost:3000/signout`, {
              username: data.name,
              password: data.password,
              email: data.email,
              firstName: data.firstName,
              secondName: data.secondName,
              cellphone: data.cellphone,
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
          <Form >
          <Field
              id="firstName"
              type="firstName"
              name="firstName"
              placeholder="First Name"
              className="signoutForm"
            />

<Field
              id="secondName"
              type="secondName"
              name="secondName"
              placeholder="Second Name"
              className="signoutForm"
            />

            <Field id="name" name="name" placeholder="Username" className="signoutForm" />

            
            <Field
              id="pasword"
              type="password"
              name="password"
              placeholder="Pasword"
              className="signoutForm"
            />

<Field
              id="email"
              type="email"
              name="email"
              placeholder="Email "
              className="signoutForm"
            />

<Field
              id="cellphone"
              type="cellphone"
              name="cellphone"
              placeholder="Cellphone "
              className="signoutForm"
            />

            

            <button type="submit" className="signoutForm">Login</button>
            {isSubmitting ? <p>Loading</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}
