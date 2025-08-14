import React from "react";
import Hooking3 from "../components/Hooking3";
import bg1 from "../images/premium_photo-1676998931123-75789162f170.avif";
import ContactForm from "../components/ContactForm";
import Hooking4 from "../components/Hooking4";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${bg1})`,
          height: "200px",
          marginTop: "-100px",
        }}
      ></div>
      <ContactForm />
      <div className="container">
        <Hooking3 />
      </div>
      <Hooking4 />

      {/* <h1>Contact Us Page</h1> */}
    </div>
  );
};

export default Contact;
