import { useEffect, useState } from "react";
import { iconClose, iconHamburguer, logo } from "../assets/images";
import { nav } from "../constant";
import Buton from "./Button";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleMenu = () => {
    setNavToggle(!navToggle);
    console.log(navToggle);
  };

  useEffect(()=>{
    document.querySelector('main').setAttribute('data-overlay',navToggle ? true : false);
    const body =  document.querySelector('body');
    navToggle ? body.style.overflowY = 'hidden' :  body.style.overflowY = '';
  },[navToggle])

  return (
    <header className="bg-white">
    <div className="container">
      <div className="nav-container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="nav-container__burguer"
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-expanded={navToggle ? true : false}
        >
          <img width={24} height={24} src={navToggle ? iconClose : iconHamburguer} alt="" />
        </button>
        <nav
          className="nav-container__header bg-white"
          id="primary-navigation"
          data-visible={navToggle ? true : false}
        >
          <ul>
            {nav.map((item) => (
              <li key={item.target}>
                <a href={item.href}>{item.target}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Buton text={'Request Invite'}></Buton>
      </div>
    </div>

    </header>
  );
};

export default Nav;
