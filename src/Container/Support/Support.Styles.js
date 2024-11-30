import styled from 'styled-components';
import { device } from '../../Constants';
import { SectionPadding } from '../../GlobalStyle';

const SupportSection = styled(SectionPadding)`
    width: 90%;
    margin: 0 auto;
    @media ${device.laptop} {
        width: 100%;
    }
`;

const Support = styled.div``;
export { SupportSection, Support };

// export default Support;
