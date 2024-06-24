/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import "../Signup/Signup.css";

const Bank = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submited detail`);
    console.log(`name: ${name}\nemail:${email}\npassword:${password}`);
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            id="name"
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!name && <span>please enter your name</span>}
          <br/>
          {name.length < 3  && <span>name must be three chare or more </span>}
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <h3>User details</h3>
      <p>Full name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
};

export default Bank;