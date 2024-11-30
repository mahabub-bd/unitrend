import styled from 'styled-components';
import { colors, fonts } from '../../Constants';
import device from '../../Constants/responsive';

const Heading = styled.h2`
    margin-bottom: 1rem;
    color: ${colors.Primary};
    font-size: 4.8rem;
    text-transform: capitalize;
    line-height: 80px;
    font-weight: 500;
    font-family: ${fonts.base};
    letter-spacing: 0.02em;
    @keyframes tracking-in-contract {
        0% {
            letter-spacing: 0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    }
    animation: tracking-in-contract 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    text-align: ${(props) => (props.center ? 'left' : 'center')};

    @media ${device.desktopL} {
        font-size: 180px;
        line-height: 210px;
    }
    @media ${device.laptopL} {
        font-size: 3rem;
    }

    @media ${device.laptop} {
        font-size: 3rem;
    }

    @media ${device.tablet} {
        font-size: 3rem;
        line-height: 40px;
    }

    @media ${device.mobileL} {
        font-size: 2.2rem;
        line-height: 40px;
    }
`;
export default Heading;
