import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export function Login() {
  const Navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const initialValues = { name: "", password: "" };

  return (
    <div >
   
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

                //guardo en el session storage la info del usuario
                sessionStorage.setItem("logged", true);
                sessionStorage.setItem("user", JSON.stringify(response));
                Navigate("loginsuccess", response);
              }
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field id="name" name="name" placeholder="Your Username" />

            <Field
              id="pasword"
              type="password"
              name="password"
              placeholder="Pasword"
            />

            <button type="submit">Login</button>
            {isSubmitting ? <p>Loading</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}
