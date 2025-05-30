import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../Constants";
import {
  Image,
  NavBar,
  NavBarLinks,
  NavBarLogo,
  NavItem,
  NavLink,
  SmallNavBar,
  SmallNavItem,
  SmallNavLink,
  SmallScreen,
  SmallScreenOverlay,
  StyledAiFillCloseCircle,
  StyledAiOutlineMenu,
} from "./Navbar.style";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Product", link: "/product" },
  { id: 4, name: "Support", link: "/support" },
  { id: 5, name: "Blog", link: "/blog" },
  { id: 6, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <NavBar className={scrolled ? "scrolled" : "navbar"}>
      <NavBarLogo>
        <NavLink as={Link} to="/">
          <Image src={images.logo} alt="unitrend_international" />
        </NavLink>
      </NavBarLogo>
      <NavBarLinks>
        {navItems.map((name) => (
          <NavItem key={name.id}>
            <NavLink as={Link} to={name.link}>
              {name.name}
            </NavLink>
          </NavItem>
        ))}
      </NavBarLinks>

      <SmallScreen>
        <StyledAiOutlineMenu onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <SmallScreenOverlay>
            <SmallNavBar>
              <StyledAiFillCloseCircle onClick={() => setToggleMenu(false)} />
              {navItems.map((name) => (
                <SmallNavItem key={name}>
                  <SmallNavLink as={Link} to={name.link}>
                    {name.name}
                  </SmallNavLink>
                </SmallNavItem>
              ))}
            </SmallNavBar>
          </SmallScreenOverlay>
        )}
      </SmallScreen>
    </NavBar>
  );
};

export default Navbar;
