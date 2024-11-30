import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';

import { ProductHeading, ProductSection } from './Product.Styles';

function ProductContainer({ activeItemKey, itemKey, Heading, ProductComponets }) {
    return (
        <ProductSection>
            <CAccordion activeItemKey={activeItemKey}>
                <CAccordionItem itemKey={itemKey}>
                    <CAccordionHeader>
                        <ProductHeading>{Heading}</ProductHeading>
                    </CAccordionHeader>
                    <CAccordionBody>{ProductComponets}</CAccordionBody>
                </CAccordionItem>
            </CAccordion>
        </ProductSection>
    );
}

export default ProductContainer;
