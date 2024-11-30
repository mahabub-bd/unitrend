import styled from 'styled-components';
import { device, fonts } from '../../Constants';
import { Paragraph1, SectionPadding } from '../../GlobalStyle';

const HeroSection = styled(SectionPadding)``;
const Paragraph = styled(Paragraph1)`
    margin: 2rem 0;
    font-family: ${fonts.base};
    @media ${device.tablet} {
        text-align: justify;
        margin: 2rem auto;
    }
`;
const HeroImage = styled.img`
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    width: 60%;

    @media ${device.laptopL} {
        width: 70%;
    }
    @media ${device.laptop} {
        width: 90%;
    }
    @media ${device.tablet} {
        width: 90%;
        margin: auto;
    }
    &:hover {
        transform: scale(0.95);
    }
`;
export { HeroSection, Paragraph, HeroImage };
// export default
