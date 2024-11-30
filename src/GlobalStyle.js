import styled from 'styled-components';
import { colors, device, fonts } from './Constants';

export const SectionPadding = styled.div`
    padding: 4rem 6rem;
    @media ${device.laptopL} {
        padding: 2rem 6rem;
    }
    @media ${device.laptop} {
        padding: 4rem;
    }
    @media ${device.tablet} {
        padding: 4rem 2rem;
    }
    @media ${device.mobileL} {
        padding: 2rem 2rem;
    }
`;

export const Paragraph1 = styled.p`
    font-family: ${fonts.alt};

    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    line-height: 29.9px;
    font-size: 2rem;
    text-align: ${(props) => (props.center ? 'center' : 'left')};

    @media ${device.desktopL} {
        font-size: 3.7rem;
        line-height: 67px;
    }
    @media ${device.laptopL} {
        font-size: 1.6rem;
        line-height: 30px;
    }
    @media ${device.tablet} {
        font-size: 18px;
    }
    @media ${device.mobileL} {
        font-size: 16px;
    }
`;

export const Paragraph2 = styled.p`
    font-family: ${fonts.alt};

    text-align: left;

    color: ${colors.Black};

    @media screen and (min-width: 850px) {
        margin: 4rem 0;
    }

    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 1.8rem;
    @media ${device.desktopL} {
        font-size: 3rem;
        line-height: 50px;
    }
    @media ${device.tablet} {
        font-size: 16px;
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`;
export const Paragraph3 = styled(Paragraph2)`
    color: ${colors.White};
`;

export const Image = styled.img`
    width: 80%;
    @media ${device.laptop} {
        width: 100%;
    }
`;

export const CustomButton = styled.button`
    background-color: ${colors.Primary};
    color: ${colors.White};
    font-family: ${fonts.base};
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    border-radius: 0.2rem;
    font-size: 16px;
    text-align: center;
    padding: 0.5rem 1.5rem;
    transition: all 0.3s ease-in-out;

    border: 1px solid ${colors.Primary};
    &:hover {
        background: ${colors.White};
        color: ${colors.Primary};
        box-shadow: 1px 1px 1px 1px ${colors.Primary};
    }
    @media ${device.mobileL} {
        padding: 0.3rem 0.7rem;
        font-size: 14px;
    }

    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    min-height: 60vh;
    @media ${device.laptopL} {
        min-height: 30vh;
    }
    @media ${device.laptop} {
        min-height: 25vh;
    }
    @media ${device.tablet} {
        flex-direction: column;
        min-height: 20vh;
        justify-content: center;
        align-items: center;
    }
`;

export const WrapperInfo = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media ${device.laptop} {
        margin: 3rem 0 0;
    }
    @media ${device.tablet} {
        align-items: center;
    }
`;
export const WrapperImage = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 2rem;
    @media ${device.laptop} {
        margin: 5rem 0 0;
    }
    @media ${device.tablet} {
        justify-content: center;
    }
`;
export const WrapperImageReverse = styled(WrapperImage)`
    justify-content: flex-start;
    margin-right: 2rem;
    @media ${device.tablet} {
        justify-content: center;
    }
`;

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BG = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
`;
