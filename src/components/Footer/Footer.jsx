import wonderWordmark from '../../assets/footer/wonder-wordmark.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mh-footer">
      <div className="mh-footer__designed">
        <span>Designed with</span>
        <img
          src={wonderWordmark}
          alt="Wonder"
          className="mh-footer__logo"
        />
      </div>
      <p className="mh-footer__rights">
        &copy; {year} Marmel. All rights reserved.
      </p>
    </footer>
  )
}
