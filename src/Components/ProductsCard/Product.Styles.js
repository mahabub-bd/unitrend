import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';
import { SectionPadding } from '../../GlobalStyle';

const ProductSection = styled(SectionPadding)`
    padding: 1rem 0;
    padding-bottom: 0;
    width: 90%;
    margin: 2rem auto;
    @media ${device.tablet} {
        width: 100%;
    }
`;
const ProductHeading = styled.h3`
    color: ${colors.Primary};
    font-size: 1.8rem;
    font-weight: 700;
    font-family: ${fonts.base};
`;

export { ProductHeading, ProductSection };

// export default ProductSection;
