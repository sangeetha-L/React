
import React from "react";

function Contact(){
  return(
    <div className="contact">
      <div
        className="leftSide"
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..."type="text"/>
          <lable htmlFor="email">Email</lable>
          <input name="email" placeholder="Enter email.."type="email"/>
          <lable htmlFor="message">Message</lable>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;