import {
    FeatureProductsCardImage,
    FeatureProductsCardTitle,
    // eslint-disable-next-line prettier/prettier
    FeatureProductsCardWrapper
} from './FeatureProductsCard.Styles';

function FeatureProductsCard({ image, title }) {
    return (
        <FeatureProductsCardWrapper>
            <FeatureProductsCardImage src={image} loading="lazy" alt={title} />
            <FeatureProductsCardTitle>{title}</FeatureProductsCardTitle>
        </FeatureProductsCardWrapper>
    );
}

export default FeatureProductsCard;
