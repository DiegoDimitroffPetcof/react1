import React, { useState } from "react";
import axios from "axios";
import {  useNavigate  } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export function Form() {

  console.log(process.env.API_URL_LOGIN);
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const Navigate = useNavigate()

const  HandleInputChange =(event) =>{

setData({
 
    //con ..data hago una pseudo copia del objeto que se encuentra en state
    ...data,
    [event.target.name]:event.target.value,
   

})
}


 


const initialValues= {name: "", password: "" }



  return (
    <div>
    <Form
    initialValues={initialValues}
    onSubmit={ async ( value)=>{


try{
      await axios.post(`http://localhost:3000/login`, {      
    username: data.name,
    password: data.password
  })
  .then(function (response) {
    console.log(response.data);
   // if (response.data === "Login success") {
      Navigate("loginsuccess")  
 //   }
 
    
  })

} catch (error) {
  console.log("SE PRODUJO UN ERROR")
  
  console.log(error)
 // Navigate("loginfail")  
}

  };


















      
      await new Promise((r)=> 

      alert(value)
      )
    }}
    >



    </Form>

    <Field id="name" placeholder= "name"/>
    <Field id="passrod" placeholder= "password"/>
    <Field id="email" placeholder= "email"/>


   
    </div>
  );
}
