import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';

const Heading = styled.h3`
    margin-bottom: 1rem;

    color: ${colors.Secondry};
    font-size: 2.8rem;
    text-transform: capitalize;
    line-height: 80px;
    font-weight: 600;
    font-family: ${fonts.base};
    letter-spacing: 0.04em;

    text-align: ${(props) => (props.center ? 'left' : 'center')};

    @media ${device.desktopL} {
        font-size: 180px;
        line-height: 210px;
    }
    @media ${device.laptopL} {
        font-size: 2rem;
    }

    @media ${device.tablet} {
        font-size: 1.6rem;
        line-height: 20px;
    }
`;

const Image = styled.img`
    text-align: center;
    width: 45px;
    @media screen and (min-width: 2000px) {
        width: 80px;
    }
`;

export { Heading, Image };
// export default Heading;
