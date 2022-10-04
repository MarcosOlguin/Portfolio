import styles from "../styles/Contact.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form: any = useRef();

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbz3h5a",
        "template_1jq3unc",
        form.current,
        "OyEASvKWttLqs_ezQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    alert("asd");
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>Send me a message!</h2>
        <p className={styles.p}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.NameEmailContainer}>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input
              autoComplete="off"
              className={styles.input}
              type="text"
              name="from_name"
              placeholder="Name"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              autoComplete="off"
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className={styles.textareaContainer}>
          <label>Your message</label>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            required
          />
        </div>

        <button type="submit" className={styles.btn}>
          Send
          <span className={styles.materialIcons}>outgoing_mail</span>
        </button>
      </form>
    </div>
  );
}

export default Contact;
