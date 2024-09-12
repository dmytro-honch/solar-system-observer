export const Contacts = () => (
  <div className="pt-5 mx-auto md:w-[400px] md:max-w-full">
    <form data-testid="contact-form">
      <div className="mb-[30px] w-full px-5 py-2.5 bg-[var(--primary-element-color)] rounded-2xl text-base font-inherit">
        <input
          className="bg-transparent w-full focus:outline-none placeholder-[var(--secondary-text-color)]"
          type="text"
          id="name"
          name="name"
          placeholder="Your name (optional)"
          required
        />
      </div>
      <div className="mb-[30px] w-full px-5 py-2.5 bg-[var(--primary-element-color)] rounded-2xl text-base font-inherit">
        <input
          className="bg-transparent w-full focus:outline-none placeholder-[var(--secondary-text-color)]"
          type="text"
          id="contact"
          name="contact"
          placeholder="How to contact (optional)"
          required
        />
      </div>
      <div className="w-full px-5 py-2.5 bg-[var(--primary-element-color)] rounded-2xl text-base font-inherit">
        <textarea
          className="bg-transparent w-full focus:outline-none placeholder-[var(--secondary-text-color)]"
          id="message"
          name="message"
          rows={18}
          placeholder="Your message to us"
          required
        />
      </div>
      <div className="text-center w-full mt-6 bg-[var(--accent-element-color)] text-[var(--secondary-text-color)] rounded-[20px] md:text-[var(--primary-text-color)]">
        <button className="w-full" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
);
