import styled from 'styled-components';
import { device } from '../../Constants';
import { Paragraph1 } from '../../GlobalStyle';

const Paragraph = styled(Paragraph1)`
    text-align: justify;
    @media ${device.tablet} {
        font-size: 1.6rem;
        margin-top: 1rem;
    }
`;

const SupportCardComponents = styled.div`
    margin-top: 4rem;
`;
export { Paragraph, SupportCardComponents };

// export default SupportCard;
