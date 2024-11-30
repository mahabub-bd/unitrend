import styled from 'styled-components';
import { device } from '../../Constants';
import { Paragraph1, SectionPadding } from '../../GlobalStyle';

const BackgroundSection = styled(SectionPadding)`
    padding: 0;
`;
const Paragraph = styled(Paragraph1)`
    text-align: justify;
    @media ${device.tablet} {
        font-size: 1.6rem;
        margin-top: 1rem;
    }
`;
const Image = styled.img`
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    width: 60%;

    @media ${device.laptopL} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 90%;
    }
    @media ${device.tablet} {
    }
    &:hover {
        transform: scale(0.95);
    }
`;
const AboutUsSectionWrapper = styled.div``;
export { BackgroundSection, Paragraph, AboutUsSectionWrapper, Image };

// export default AboutUs;
