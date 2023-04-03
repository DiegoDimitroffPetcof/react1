import React from "react";

export function LoginSuccess() {
  //recibo del Session Storage la info de user
  let user = sessionStorage.getItem("user");
  let userp = JSON.parse(user);

  return (
    <div className="titleLogged">
      <h1>El logeo ha sido exitoso</h1>
      <h2>Bienvenido {userp.data.firstName}!</h2>
      Your information: 
      <p>First Name: {userp.data.firstName}!</p>
      <p>Last Name:  {userp.data.secondName}!</p>
      <p>Email: {userp.data.email}!</p>
      <p>Your Cellphone:  {userp.data.cellphone}!</p>
      <p>Your Username: {userp.data.username}!</p>

    </div>
  );
}

export default LoginSuccess;
