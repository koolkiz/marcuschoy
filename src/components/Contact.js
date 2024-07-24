import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = styled.section`
  padding: 4em 1em;
  background-color: #25476A;
  color: #fff;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1em;

  @media (max-width: 768px) {
    padding: 0 1.5em; /* Adjust the padding for mobile devices */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  margin: 0.5em 0;
  padding: 0.75em;
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:focus {
    background-color: #f0f0f0;
  }
`;

const TextArea = styled.textarea`
  margin: 0.5em 0;
  padding: 0.75em;
  width: 100%;
  max-width: 400px;
  height: 100px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:focus {
    background-color: #f0f0f0;
  }
`;

const Button = styled.button`
  padding: 0.75em 1.5em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ccc;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9em;
  color: #ccc;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = 'https://formspree.io/f/mvgpzrlw';
    fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('Failed to send message.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <h2>Contact 📬</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message 💬</Button>
        </Form>
        <GitHubLink href="https://github.com/acharyaarish" target="_blank">
          <FaGithub /> GitHub
        </GitHubLink>
        <Footer>&copy; 2023 Arish Acharya - All rights reserved.</Footer>
      </Container>
      <ToastContainer />
    </ContactSection>
  );
};

export default Contact;
