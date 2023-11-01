import { Link } from 'react-router-dom'

export default function Contact(): JSX.Element {
  return (
    <div className="container">
      <nav>
        <Link to="/">&lt; back</Link>
      </nav>
      <div>
        <h1 style={{ marginBottom: '1.5rem' }}>Contact</h1>
        <form style={{ backgroundColor: '#d3e0e1', padding: '1rem' }}>
          <div>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="text" name="email" />
          </div>
          <div>
            <label htmlFor="contact-email">Email Subscribe</label>
            <input id="contact-email-subscribe" type="checkbox" name="email-subscribe" />
          </div>
          <div>
            <label htmlFor="contact-question">Question</label>
            <textarea id="contact-question" name="question" />
          </div>
          <div>
            <button type="submit">Get Help!</button>
          </div>
        </form>
      </div>
    </div>
  )
}
