import { CCarousel, CCarouselItem } from '@coreui/react';

import { images } from '../../Constants';
import { Heading, StyledCarouselCaption, StyledCarouselImage } from './Carousel.Style';

const HeaderCarousel = () => (
    <CCarousel controls interval={3000} transition="crossfade">
        <CCarouselItem>
            <StyledCarouselCaption>
                <Heading>Simply Solutions Of Reliable And Trustworthy Sourcing And Supply</Heading>
            </StyledCarouselCaption>
            <StyledCarouselImage src={images.carousel1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
            <StyledCarouselImage src={images.carousel2} alt="slide 2" />
            <StyledCarouselCaption>
                <Heading>Simply Solutions Of Reliable And Trustworthy Sourcing And Supply</Heading>
            </StyledCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
            <StyledCarouselImage src={images.carousel3} alt="slide 3" />
            <StyledCarouselCaption>
                <Heading>Simply Solutions Of Reliable And Trustworthy Sourcing And Supply</Heading>
            </StyledCarouselCaption>
        </CCarouselItem>
    </CCarousel>
);

export default HeaderCarousel;
