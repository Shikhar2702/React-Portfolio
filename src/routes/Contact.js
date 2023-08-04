import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";
import Img from "../assets/Contact.jfif";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="" text="" backgroundImage={Img} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
