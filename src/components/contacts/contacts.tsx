import './contacts.css';

export const Contacts = () => (
  <div className="contact-form">
    <form data-testid="contact-form">
      <div className="form-input">
        <input type="text" id="name" name="name" placeholder="Your name (optional)" required />
      </div>
      <div className="form-input">
        <input type="text" id="contact" name="contact" placeholder="How to contact (optional)" required />
      </div>
      <div className="form-textarea">
        <textarea id="message" name="message" rows={18} placeholder="Your message to us" required />
      </div>
      <div className="submit-btn">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
);
