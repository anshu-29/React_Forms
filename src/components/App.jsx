import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [headingText, setHeadingText] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  }
  function clickHandler(event) {
    setHeadingText(`${contact.fName} ${contact.lName} `);
    setEmail(contact.email);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <p>{email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button onClick={clickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
