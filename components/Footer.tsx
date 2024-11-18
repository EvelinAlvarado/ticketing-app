import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { IconName } from "@/types/icons";

const ICON_MAP: Record<IconName, IconDefinition> = {
  faSquareFacebook: faSquareFacebook,
  faSquareXTwitter: faSquareXTwitter,
  faSquareInstagram: faSquareInstagram,
  faLinkedin: faLinkedin,
};

const Footer = () => {
  return (
    <footer className="footer-grid border-t-2 border-primary-shades padding-container text-default-dark">
      {" "}
      {/* footer-grid just user register or sing in */}
      <div className="max-container grid grid-cols-2 md:grid-cols-3 gap-8 my-8 md:my-8">
        {FOOTER_LINKS.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="hover:underline hover:text-light-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flexCenter space-x-4 md:space-x-8">
        {SOCIAL_MEDIA_LINKS.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-light-accent text-2xl"
          >
            <FontAwesomeIcon icon={ICON_MAP[social.icon]} />
          </a>
        ))}
      </div>
      <div className="text-center my-8">
        © {new Date().getFullYear()} Tickify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
