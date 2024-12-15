import React, { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    // Prevent default form behavior
    e.preventDefault();

    const Dataobj = {
      fname: fname,
      lname: lname,
      phone: phone,
    };

    try{

    fetch("https://backend-five-inky.vercel.app/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Dataobj),
    })
      .then(() => {
        console.log("Connected successfully...");
        alert("Data submitted successfully!");
        setFname("")
        setLname("")
        setPhone("")
        
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to submit data.");
      });
    }
    catch(err){
      console.log(err);
    }
    
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <h1>Register Form</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Phone"
            name="myphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
