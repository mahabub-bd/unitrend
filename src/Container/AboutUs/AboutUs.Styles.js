import styled from 'styled-components';
import { device } from '../../Constants';
import { SectionPadding } from '../../GlobalStyle';

const AboutUsSection = styled(SectionPadding)`
    width: 90%;
    margin: 0 auto;
    @media ${device.laptop} {
        width: 100%;
    }
`;
const AboutUs = styled.div``;

export { AboutUsSection, AboutUs };

// export default AboutUs;
