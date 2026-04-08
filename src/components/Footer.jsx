import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="footer-title">The Mandalorian &amp; Grogu</span>
          <span className="footer-sub">22. Mai 2026 · Im Kino</span>
        </div>

        <div className="footer-divider" />

        <div className="footer-links">
          <a
            href="https://www.starwars.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            StarWars.com
          </a>
          <a
            href="https://www.youtube.com/watch?v=IHWlvwu8t1w"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Offizieller Trailer
          </a>
          <a
            href="https://www.disneyplus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Disney+
          </a>
        </div>

        <p className="footer-disclaimer">
          Diese Seite ist ein Fan-Projekt. Star Wars, The Mandalorian und alle
          zugehörigen Charaktere und Markennamen sind Eigentum von Lucasfilm Ltd.
          &amp; Disney. Alle Rechte vorbehalten.
        </p>

        <p className="footer-tagline">"This is The Way."</p>

        <div className="footer-divider" style={{ marginTop: '2rem' }} />

        <a
          href="https://www.paypal.com/paypalme/Sparky512"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-coffee"
        >
          <span className="footer-coffee-icon">☕</span>
          Buy me a Kaff'a (Caf) for the Way
        </a>
      </div>
    </footer>
  )
}
