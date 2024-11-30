import styled from 'styled-components';
import { device } from '../../Constants';
import { SectionPadding } from '../../GlobalStyle';

const OurStrategiesSection = styled(SectionPadding)`
    min-height: 60vh;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    @media ${device.laptop} {
        min-height: 30vh;
        padding: 2rem 2rem;
    }
`;
const Paragraph = styled.p``;

export { OurStrategiesSection, Paragraph };

// Export
