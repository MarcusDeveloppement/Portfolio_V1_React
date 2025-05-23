import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      setSending(true);

      const templateParams = {
        from_name: values.name,
        reply_to: values.email,
        message: values.message,
      };

      emailjs
        .send(
          "service_m5ue83e",
          "template_wok1vgf",
          templateParams,
          "XgwNdCscQtUrzRQJx"
        )
        .then(
          (response) => {
            console.log("SUCCÈS!", response.status, response.text);
            alert("Message envoyé avec succès !");
            resetForm();
            setSending(false);
          },
          (err) => {
            console.log("ÉCHEC...", err);
            alert("Échec de l'envoi du message. Veuillez réessayer.");
            setSending(false);
          }
        );
    },
  });

  return (
    <form
      id="contact"
      onSubmit={formik.handleSubmit}
      className={styles.nameContent}
      data-aos="zoom-in"
    >
      <div className={styles.formContainer}>
        <h2>Contactez-moi</h2>
        <div className={styles.nameForm}>
          <div className={styles.labelInp}>
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className={styles.labelInp}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
        </div>

        <div className={styles.labelInp}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <button type="submit" disabled={sending}>
          {sending ? "Envoi en cours..." : "Envoyer"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
