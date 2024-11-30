import {
    OurStrategiesCardWrapper,
    OurStrategiesImage,
    // eslint-disable-next-line prettier/prettier
    OurStrategiesTitle
} from './OurStrategies.Styles';

import { Paragraph1 } from '../../GlobalStyle';

function OurStrategiesCard({ image, title, subtitle }) {
    return (
        <OurStrategiesCardWrapper>
            <OurStrategiesImage src={image} loading="lazy" alt={title} />
            <OurStrategiesTitle>{title}</OurStrategiesTitle>
            <Paragraph1 center>{subtitle}</Paragraph1>
        </OurStrategiesCardWrapper>
    );
}

export default OurStrategiesCard;
