import React, { useState } from "react";
import Scroll from "react-scroll";
import emailjs from "emailjs-com";

import checkIcon from "../../assets/images/check.svg";

import Toast from "../Toast/Toast";

const Element = Scroll.Element;

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [list, setList] = useState([]);

  const dismissTime = 5000;
  let toastProperties = null;

  const showToast = () => {
    const id = Math.floor(Math.random() * 101 + 1);

    toastProperties = {
      id,
      title: "Sent",
      description: "Thank you for your message!",
      backgroundColor: "$color-success",
      icon: checkIcon,
    };

    setList([...list, toastProperties]);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_oqnKSuXu3Wqz1b4hywWUw"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setMessage({ name: "", email: "", message: "" });
            showToast();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact">
      <section className="contact">
        <h2 className="section-heading">{"< Contact />"}</h2>
        <p>Let's chat!</p>
        <div className="contact__cta">
          <p>
            Send me an email at{" "}
            <a href="mailto:david.weinstock@me.com">
              michellekaplan.dev@gmail.com
            </a>
          </p>
          <p>or use the form below:</p>
        </div>

        <form onSubmit={sendEmail} className="contact__form">
          <label htmlFor="user_name">Name</label>
          <input
            required
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Jim Halpert"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
          />

          <label htmlFor="user_email">Email</label>
          <input
            required
            id="user_email"
            type="email"
            name="user_email"
            placeholder="example@email.com"
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
          />

          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={message.message}
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
          ></textarea>

          <button type="submit">Send</button>
        </form>

        <Toast toastList={list} autoDelete={false} dismissTime={dismissTime} />
      </section>
    </Element>
  );
};

export default Contact;
