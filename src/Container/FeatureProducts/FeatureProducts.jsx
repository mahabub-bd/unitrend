import { HeadingPrimary } from "../../Components";
import FeatureProductsCard from "../../Components/FeatureProductsCard/FeatureProductsCard";
import { data } from "../../Constants";
import { CardWrapper, FeatureProductsWrapper } from "./FeatureProducts.Styles";

function FeatureProducts() {
  return (
    <FeatureProductsWrapper>
      <HeadingPrimary center title="Feature Products" />

      <CardWrapper>
        {data.featureProducts.map((product, index) => (
          <FeatureProductsCard
            key={index + 1}
            image={product.imgUrl}
            title={product.title}
          />
        ))}
      </CardWrapper>
    </FeatureProductsWrapper>
  );
}

export default FeatureProducts;
