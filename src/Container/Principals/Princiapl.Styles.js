import styled from 'styled-components';
import { images } from '../../Constants';
import { SectionPadding } from '../../GlobalStyle';

const PrincipalSection = styled(SectionPadding)`
    background-image: url(${images.map});
`;

const Paragraph = styled.p``;

export { PrincipalSection, Paragraph };

// Export default
