export default function ContactMe() {
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch With Me</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            My email (acquahrichmond.a@gmail.com) is active 24/7—Please do not hesitate to reach out. Or kindly fill out the form below.
          </p>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">What's it About?</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Project Request</option>
              <option>Collaborate</option>
              <option>Request Info</option>
              <option>Other</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type a Message..."
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I agree to send this message</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }