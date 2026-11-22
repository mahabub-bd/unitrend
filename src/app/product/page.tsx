import type { Metadata } from "next";
import Product from "@/components/Products/Product";
import Principals from "@/components/Principals/Principals";
import { prisma } from "@/lib/prisma";
import type { ProductRow } from "@/components/Products/ProductsTable";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore printing inks, chemicals, textile ribbons, lace, machinery and certified leather patches.",
  alternates: { canonical: "/product" },
};

export default async function ProductPage() {
  const categories = await prisma.productCategory.findMany({
    where: { active: true },
    include: { products: { where: { active: true }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] } },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });
  const groups = categories.length > 0
    ? categories.map((category) => ({
        heading: category.name,
        showType: category.showType,
        showBrand: category.showBrand,
        rows: category.products.map((item): ProductRow => ({
          row: 0,
          productName: item.name,
          type: item.type ?? undefined,
          brand: item.brand ?? undefined,
          origin: item.origin,
          application: item.application,
        })),
      }))
    : undefined;
  return (
    <>
      <Product groups={groups} />
      <Principals />
    </>
  );
}
