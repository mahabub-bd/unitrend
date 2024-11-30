import styled from 'styled-components';
import { colors, device } from '../../Constants';
import { SectionPadding, Wrapper } from '../../GlobalStyle';

const FeatureProductsWrapper = styled(SectionPadding)`
    width: 100%;

    background: ${colors.light};
`;
const CardWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    flex-basis: 400px;
    gap: 0.8rem;
    margin: 4rem 8rem;

    @media ${device.laptop} {
        margin: 2rem 4rem;
    }
    @media ${device.tablet} {
        margin: 1rem;
    }
`;

export { FeatureProductsWrapper, CardWrapper };

// export default FeatureProducts;
