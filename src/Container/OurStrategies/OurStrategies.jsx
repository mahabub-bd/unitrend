import { HeadingPrimary, OurStrategiesCard } from '../../Components';
import { OurStrategiesSection } from './OurStrategies.Styles';

import { data } from '../../Constants';
import { Wrapper } from '../../GlobalStyle';

function OurStrategies() {
    return (
        <OurStrategiesSection>
            <HeadingPrimary center title="Our Strategies" />
            <Wrapper>
                {data.ourStrategies.map((item) => (
                    <OurStrategiesCard
                        key={item.title}
                        image={item.imgUrl}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </Wrapper>
        </OurStrategiesSection>
    );
}

export default OurStrategies;
