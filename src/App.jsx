import React, { useState } from "react";
import "./App.css";

function App() {
  const [m, setM] = useState("");   
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 

  const handleG= async () => {
    const response = await fetch("http://127.0.0.1:5000/get");
    const data = await response.json();
    setM(JSON.stringify(data, null, 2)); 
  };

  const handleP = async (e) => {
    e.preventDefault(); 
    const response = await fetch("http://127.0.0.1:5000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }), 
    });
    const data = await response.json();
    setM(JSON.stringify(data, null, 2));
     
  };

  return (
    <div className="parent">
      <header className="header">HANNITY</header>
      
      <footer className="footer">
        <button className="daylight" onClick={handleG}>GET</button>
      </footer>
      <div style={{ padding: "20px" }}>
        <form onSubmit={handleP}>
          <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="signup" type="submit">POST</button>
        </form>
      </div>
      <pre style={{ padding: "20px", color: "black", background: "#f4f4f4" }}>
        {m}
      </pre>
    </div>
  );
}

export default App;
