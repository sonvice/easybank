import { logoWhite, social } from "../assets/images";
import { Button } from "../components";
import { navFooter } from "../constant";
import { FaFacebookSquare,FaYoutubeSquare,FaTwitter,FaPinterest,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__social-box">
        
          <a href="#" className="footer__logo">
            <img src={logoWhite} alt="Logo" />
          </a>
        
        <ul role="list" className="footer__social size-1">
          <li>
            <a href="#">
             <FaFacebookSquare></FaFacebookSquare>
            </a>
          </li>
          <li>
            <a href="#">
            <FaYoutubeSquare></FaYoutubeSquare>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter></FaTwitter>
            </a>
          </li>
          <li>
            <a href="#">
            <FaPinterest></FaPinterest>
            </a>
          </li>
          <li>
            <a href="#">
            <FaInstagram></FaInstagram>
            </a>
          </li>
        </ul>
      </div>
      <nav>
        <ul className="footer__nav text-very-light-gray flow" role="list">
          {navFooter.map((item) => (
            <li key={crypto.randomUUID()}>
              <a href={item.href}>{item.target}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__box-btn">
        <Button text={"Request Invite"}></Button>
        <p className="pt-space-l size--1 text-gray-blue">
          © Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
