import './contact.css';

export const Contact = () => {
  return (
    <form className="contact-form">
      <input className="form-input" type="text" id="name" name="name" placeholder="Your name (optional)" required />

      <input
        className="form-input"
        type="text"
        id="contact"
        name="contact"
        placeholder="How to contact (optional)"
        required
      />

      <textarea
        className="form-textarea"
        id="message"
        name="message"
        rows="18"
        placeholder="Your message to us"
        required
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};
