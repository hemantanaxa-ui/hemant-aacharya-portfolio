import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact Me</h2>
            <p><strong>Email:</strong> example@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Your City, Country</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;