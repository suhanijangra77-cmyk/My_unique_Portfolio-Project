import { Github, Linkedin } from "lucide-react";

function Footer({name,socials}) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>2026{name}.Thanks for visiting</p>
        <div className="social-icons">
          <a className="icon-link" href={socials.github}><Github size={18} />Github</a>
          <a className="icon-link" href={socials.linkedin}><Linkedin size={18} />Linkedin</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
