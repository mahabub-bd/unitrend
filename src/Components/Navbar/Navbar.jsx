import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Constants';
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
    // eslint-disable-next-line prettier/prettier
    StyledAiOutlineMenu
} from './Navbar.style';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Product', link: '/product' },
    { name: 'Support', link: '/support' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
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
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <NavBar className={scrolled ? 'scrolled' : 'navbar'}>
            <NavBarLogo>
                <NavLink as={Link} to="/">
                    <Image src={images.logo} alt="unitrend_international" />
                </NavLink>
            </NavBarLogo>
            <NavBarLinks>
                {navItems.map((name) => (
                    <NavItem key={name}>
                        <NavLink as={Link} to={name.link}>
                            {name.name}
                        </NavLink>
                    </NavItem>
                ))}
            </NavBarLinks>

            {/* <Login>
                <NavLink as={Link} to="/login">
                    Log In / Registration
                </NavLink>
            </Login> */}

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
