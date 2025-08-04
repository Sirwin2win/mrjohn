import React from "react";

const ContactForm = () => {
  return (
    <div className="container">
      <h4 className="text-primary text-center my-5">Send Us an Email</h4>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">
          Email Us
        </button>
        {/* <button class="btn btn-primary" type="button">Button</button> */}
      </div>
    </div>
  );
};

export default ContactForm;
