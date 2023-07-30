import "./FormStyles.css";
import React from "react";

const Form = () => {
  //   const formRef = useRef(null);

  //   useEffect(() => {
  //     if (formRef.current) {
  //       formRef.current.reset();
  //     }
  //   }, []);

  return (
    <div className="form">
      <form
        action="https://formspree.io/f/xgejoavq"
        // ref={formRef}
        method="post"
        // onSubmit={handleSubmit}
      >
        <label>Your Name</label>
        <input type="text" name="user_name" required />
        <label>Your Email</label>
        <input type="email" name="user_email" required />
        <label>Subject</label>
        <input type="text" name="user_subject" required />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          required
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
