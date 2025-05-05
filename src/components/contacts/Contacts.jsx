import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_469s79q",
                "template_sd8gp5l",
                form.current,
                "05f4PcBh4UlsMIhAK"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            e.target.reset()
    };

    
    return (
        <section id="contacts">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contacts_container">
                <div className="contacts_options">
                    <article className="contacts_option">
                        <MdOutlineEmail className="contacts_option-icon" />
                        <h4>Email</h4>
                        <a
                            href="mailto:mumiaderick@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send me an email
                        </a>
                    </article>
                    <article className="contacts_option">
                        <BsWhatsapp className="contacts_option-icon" />
                        <h4>WhatsApp</h4>
                        <a
                            href="https://wa.me/254748236790?text=Hello"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send me a message
                        </a>
                    </article>
                </div>
                {/* End of contacts options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                    ></textarea>

                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;
