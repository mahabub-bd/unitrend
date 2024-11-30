import { CCarouselCaption } from '@coreui/react';
import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';

const StyledCarouselImage = styled.img`
    display: block;
    width: 100%;
    height: 60vh;
    @media ${device.laptopL} {
        height: 400px;
    }
    @media ${device.laptop} {
        height: 300px;
    }
    @media ${device.tablet} {
        height: 200px;
    }
`;
const StyledCarouselCaption = styled(CCarouselCaption)`
    bottom: 1%;
`;
const Heading = styled.h2`
    color: ${colors.White};
    font-size: 1.8rem;
    text-transform: capitalize;
    line-height: 80px;
    font-weight: 200;
    font-family: ${fonts.base};
    @media ${device.laptopL} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        font-size: 1.6rem;
    }
    @media ${device.tablet} {
        font-size: 1.1rem;
        line-height: 20px;
    }
`;
export { StyledCarouselImage, StyledCarouselCaption, Heading };

// export
