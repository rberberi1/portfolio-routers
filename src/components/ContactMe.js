import { useState } from 'react';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.length===0) {
      newErrors.name = 'Name is required';
    }
    if (email.length===0) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (subject.length===0) {
      newErrors.subject = 'Subject is required';
    }
    if (message.length===0) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
    } else {
      setErrors({});         
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        {errors.name && <p className="error">{errors.name}</p>} 
        
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p className="error">{errors.email}</p>} 

        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          name="subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
        />
        {errors.subject && <p className="error">{errors.subject}</p>} 
        
        <label htmlFor="message">Message</label>
        <textarea 
          name="message" 
          rows="5" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>} 

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactMe;
