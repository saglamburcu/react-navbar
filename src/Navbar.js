import { links, social } from "./data";
import { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    let linkContainerHeight = linkContainerRef.current;

    if (isShowMenu) {
      linkContainerHeight.style.height = `${linkRef.current.getBoundingClientRect().height}px`;
    } else {
      linkContainerHeight.style.height = "0px"
    }
  }, [isShowMenu]);

  return (
    <nav className="navbar-container">
      <div className="title">
        <h1>Coding Addict</h1>
        <button className="toggle-btn" type="button" onClick={() => setIsShowMenu(!isShowMenu)}>
          <GiHamburgerMenu />
        </button>
      </div>

      <div className="menu-container" ref={linkContainerRef}>
        <ul className="menu" ref={linkRef}>
          {
            links.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id} >
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>


      <ul className="icons">
        {
          social.map(item => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar;