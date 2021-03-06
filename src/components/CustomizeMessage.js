import React from "react";
import "../App.css";
import logo from "../images/ecardpic.jpg";

function CustomizeMessage({
  email,
  setEmail,
  greeting,
  setGreeting,
  body,
  setBody,
  closing,
  setClosing,
  setCustomize,
  setPreview
}) {
    const onSummit=(e)=>{
        e.preventDefault();
        setPreview(true);
        setCustomize(false)
    }
  return (
    <div className="customize">
      <div className="instructions">
        <img src={logo} className="thumb" alt="logo"  />
        <p>
          <strong>How to Reshare:</strong>
          <br />
          Write your own custom message below{" "}
        </p>
      </div>
      <div className="formInput">
      <form >
        <div>
        <label htmlFor="email">Recipient Email</label>
        <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Recipient Email"
        />
        </div>
        <div>
        <label htmlFor="greeting">Greeting</label>
        <input
            name="greeting"
            id="greeting"
            type="text"
            value={greeting}
            onChange={(e)=>setGreeting(e.target.value)}
            placeholder="Greeting"
        />
        </div>        
        <div>
        <label htmlFor="body">Body</label>
        <textarea
            name="body"
            id="body"
            type="text"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            placeholder="Body"
            rows="4"
            maxLength="200"
        ></textarea>
        </div>        
        <div>
        <label htmlFor="closing">Closing</label>
        <input
            name="closing"
            id="closing"
            type="text"
            value={closing}
            onChange={(e)=>setClosing(e.target.value)}
            placeholder="Closing"
        />
        </div> 
        <div>
            <button className="customizeButton" type="submit" onClick={onSummit}>Preview Greeting Card</button>
        </div>       
      </form>
      </div>
      
    </div>
  );
}

export default CustomizeMessage;
