import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';

const StyledAiFillCloseCircle = styled(AiFillCloseCircle)`
    color: ${colors.White};
    font-size: 2.7rem;
    cursor: pointer;

    @media ${device.laptop} {
        font-size: 35px;
    }
    @media ${device.tablet} {
        font-size: 25px;
    }
`;

const StyledAiOutlineMenu = styled(AiOutlineMenu)`
    color: ${colors.Primary};
    font-size: 27px;
    cursor: pointer;
    @media ${device.laptop} {
        font-size: 30px;
    }
    @media ${device.tablet} {
        font-size: 25px;
    }
`;

const Image = styled.img`
    width: 50px;
    @media ${device.desktopL} {
        width: 210px;
    }
    @media ${device.laptop} {
        width: 50px;
    }
`;
const NavBarLinks = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-bottom: 0;
    //Mobile nav
    @media ${device.laptop} {
        display: none;
    }
`;

const NavItem = styled.li`
    margin: 0 1rem;
    cursor: pointer;
`;

const NavLink = styled.a`
    font-family: ${fonts.alt};
    color: ${(props) => (props.primary ? '#ffffff' : '#69010E')};
    font-size: ${(props) => (props.primary ? '1.4rem' : '1.8rem')};
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 28px;

    &:hover {
        color: ${colors.Gray};
    }

    @media ${device.laptopL} {
        font-size: 1.5rem;
    }
`;
const Login = styled.div`
    display: flex;
    @media ${device.tablet} {
        display: none;
    }
    color: ${colors.Gray};
    justify-content: flex-end;
    align-items: center;
    & a {
        margin: 0 1rem;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
            border-bottom: 1px solid ${colors.Primary};
            color: ${colors.Secondry};
        }
    }
`;
const Div = styled.div`
    width: 1px;
    height: 30px;
    background-color: ${colors.Grey};
`;

// Mobile Nav Bar
const SmallScreen = styled.div`
    display: none;
    @media ${device.laptop} {
        display: flex;
    }
`;
const SmallNavBar = styled.ul`
    list-style: none;
    @media ${device.laptop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        color: ${colors.Golden};
    }
    @media ${device.tablet} {
        height: 100vh;
        width: 100%;
    }
`;

const SmallNavItem = styled.li`
    margin: 1.5rem 0;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    font-family: ${fonts.base};
`;

const SmallNavLink = styled.a`
    font-family: ${fonts.base};
    font-size: 6rem;
    color: ${colors.White};

    &:hover {
        border-bottom: 1px solid ${colors.Golden};
        color: ${colors.White};
    }
    @media ${device.laptop} {
        font-size: 3.5rem;
        line-height: 1.8;
    }
    @media ${device.tablet} {
        font-size: 2.2rem;
        line-height: 1.8;
    }
`;
const SmallScreenOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    transform-origin: left;
    background-image: linear-gradient(
        to right,

        ${colors.Primary} 50%,
        ${colors.Secondry} 100%
    );
    @keyframes moveDown {
        from {
            transform: translateX(-15rem);
        }
        to {
            transform: translateX(0rem);
        }
    }
    animation: moveDown 0.2s ease-in-out;

    flex-direction: column;
    z-index: 5;
`;

// Mobile Nav Bar

const NavBar = styled.nav`
    &.navbar {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${colors.White};
        padding: 0.5rem 4rem;
        @media ${device.tablet} {
            padding: 0.5rem;
        }
    }
    &.scrolled {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        transition: 0.3s ease-in-out;
        top: 0;
        transform-origin: top;
        z-index: 500;
        padding: 0.5rem 4rem;
        animation: moveDown 0.5s ease-in-out;
        background: ${colors.White};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.06);
        @media ${device.tablet} {
            padding: 0.5rem;
        }
    }
`;

const NavBarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.7rem;
`;

export {
    Image,
    NavBarLinks,
    NavItem,
    NavLink,
    Login,
    Div,
    NavBar,
    NavBarLogo,
    SmallScreen,
    SmallNavBar,
    SmallNavItem,
    SmallNavLink,
    SmallScreenOverlay,
    StyledAiFillCloseCircle,
    StyledAiOutlineMenu,
};
// Language: javascript
