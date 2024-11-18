import "../../styles/contact.css"


export default function Contact() {
  return (
    
    <div className="top-W">
      <div className="content">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We would love to hear from you!</p> 
      </div>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <label className="form-label" htmlFor="name">Name</label>
          <input type="text" id="name" className="form-input" placeholder="Your Name" required />

          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" placeholder="Your Email" required />

          <label className="form-label" htmlFor="message">Message</label>
          <textarea id="message" className="form-textarea" placeholder="Your Message" required></textarea>

          <button type="submit" className="add-to-cart">Send Message</button>
        </form>
        
      </div>
    </div>
  );
}