import styled from 'styled-components';
import { device, fonts } from '../../Constants';

const FeatureProductsCardImage = styled.img`
    width: 380px;
    height: 280px;

    @media ${device.laptopL} {
        width: 340px;
        height: 240px;
    }
    @media ${device.tablet} {
        width: 380px;
        height: 240px;
    }
`;
const FeatureProductsCardTitle = styled.h1`
    text-align: center;
    margin: 1rem 0;
    font-size: 2rem;
    font-family: ${fonts.base};
`;
const FeatureProductsCardWrapper = styled.div`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
    @media ${device.laptopL} {
        margin-top: 2rem;
    }
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        transform: scale(0.98);
    }
`;

export { FeatureProductsCardImage, FeatureProductsCardTitle, FeatureProductsCardWrapper };

// Export default
