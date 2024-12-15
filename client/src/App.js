import React, { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [mailmsg,setMailmsg]=useState(false);




  const handleSubmit = (e) => {
    // Prevent default form behavior
    e.preventDefault();

    const Dataobj = {
      fname: fname,
      lname: lname,
      phone: phone,
    };

    try{

    fetch("https://backend-eight-delta-64.vercel.app/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Dataobj),
    })
      .then((msg) => {
        return msg.json();
        
        
      }).then((newdata)=>{
        console.log(newdata);
        console.log("Connected successfully...");
        alert("Data submitted successfully!");
        setFname("")
        setLname("")
        setPhone("")
        setMailmsg(true);
        setTimeout(()=>{setMailmsg(false)},5000);

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
{ mailmsg &&
      <section className="mailmsg">
        <h1>data send successfully</h1>
      </section>

}
    </>
  );
}

export default App;
