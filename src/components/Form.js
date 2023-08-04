import "./FormStyles.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("xgejoavq");
  if (state.succeeded) {
    return (
      <p>
        <h4>Response recieved!! ✅</h4>
        Thanks for communicating! I will get back to you.😊
        <br />
        <b>-Shikhar Agrawal-</b>
      </p>
    );
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="user_name" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Your Email</label>
        <input type="email" name="user_email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>Subject</label>
        <input type="text" name="user_subject" required />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          required
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
