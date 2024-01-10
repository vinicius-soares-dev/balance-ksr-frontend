import React from "react";
import { useState } from "react";

import "../../assets/styles/backgroundSection/style.css";
import "../../assets/styles/LoginMain/style.css";


export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if(email && password) {
      console.log("function activate");
    }
  }


  return (
    <main className="main-container">
        <section className="section-background">
          <section className="content-main">
            <h1 className="title-main">Balance - KSR</h1>
          </section>

        </section>
          <section className="form-main">
            <form onSubmit={handleSubmit} className="form-">
              
              <label>Digite seu e-mail:</label>
              <input type="text" value={email} onChange={() => handleEmailChange}></input>
              <label>Digite sua senha:</label>
              <input type="text" value={password} onChange={() => handlePasswordChange}></input>
              <button>Enviar</button>

            </form>

          </section>
    </main>
  )
}