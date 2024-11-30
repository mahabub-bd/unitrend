import {
  HeadingPrimary,
  LabelPrintingInkMachine,
  LabelPrintingInkPfl,
  LabelPrintingInkRibbon,
  LabelPrintingInkScreen,
  Lace,
  LeatherPatch,
  OffsetPrintingInk,
  ProductContainer,
} from "../../Components";

import ProductSection from "./Product.Styles";

function Product() {
  return (
    <ProductSection>
      <HeadingPrimary title="Products & Application Industry" />
      <ProductContainer
        activeItemKey="0"
        itemKey="1"
        Heading="Textile Label Printing Ink (PFL)"
        ProductComponets=<LabelPrintingInkPfl />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="2"
        Heading="Textile Label Printing Ink (SCREEN)"
        ProductComponets=<LabelPrintingInkScreen />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="3"
        Heading="Offset Printing Ink & Chemicals"
        ProductComponets=<OffsetPrintingInk />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="4"
        Heading="Lace"
        ProductComponets=<Lace />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="5"
        Heading="Textile Label Printing Ribbon"
        ProductComponets=<LabelPrintingInkRibbon />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="6"
        Heading="Textile Label Printing Machine"
        ProductComponets=<LabelPrintingInkMachine />
      />
      <ProductContainer
        activeItemKey="0"
        itemKey="6"
        Heading="Leather Patch"
        ProductComponets=<LeatherPatch />
      />
    </ProductSection>
  );
}

export default Product;
