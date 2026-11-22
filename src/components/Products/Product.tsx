"use client";

import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiPackage, FiSearch } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductsTable, { ProductRow } from "@/components/Products/ProductsTable";
import { data } from "@/constants/data";

interface ProductGroup {
  heading: string;
  rows: ProductRow[];
  showType?: boolean;
  showBrand?: boolean;
}

const ProductGroupAccordion = ({ group }: { group: ProductGroup }) => {
  const [open, setOpen] = useState(false);

  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-porcelain sm:px-6"
          aria-expanded={open}
        >
          <div className="flex items-center gap-4">
            <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary sm:grid">
              <FiPackage aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-base text-[15px] font-semibold text-ink sm:text-lg">
                {group.heading}
              </h3>
              <p className="mt-1 text-xs text-muted">{group.rows.length} product options</p>
            </div>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-primary">
            {open ? <AiOutlineUp aria-hidden="true" /> : <AiOutlineDown aria-hidden="true" />}
          </span>
        </button>
        {open && (
          <div className="border-t border-line p-3 sm:p-5">
            <ProductsTable
              rows={group.rows}
              showType={group.showType !== false}
              showBrand={group.showBrand}
            />
          </div>
        )}
      </div>
    </Reveal>
  );
};

const fallbackGroups: ProductGroup[] = [
  { heading: "Textile Label Printing Ink (PFL)", rows: data.labelPrintingInkPfl },
  { heading: "Textile Label Printing Ink (SCREEN)", rows: data.labelPrintingInkScreen },
  { heading: "Offset Printing Ink & Chemicals", rows: data.offsetprintingink },
  { heading: "Lace", rows: data.lace },
  { heading: "Textile Label Printing Ribbon", rows: data.labelprintingribbon },
  { heading: "Textile Label Printing Machine", rows: data.labelprintingmachine, showType: false },
  { heading: "Leather Patch", rows: data.leatherpatch, showBrand: true },
];

const Product = ({ groups = fallbackGroups }: { groups?: ProductGroup[] }) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGroups = groups.filter((group) => {
    if (!normalizedQuery) return true;
    return (
      group.heading.toLowerCase().includes(normalizedQuery) ||
      group.rows.some((row) =>
        `${row.productName} ${row.type ?? ""} ${row.brand ?? ""} ${row.origin} ${row.application}`
          .toLowerCase()
          .includes(normalizedQuery)
      )
    );
  });

  return (
    <>
      <section className="border-b border-line bg-porcelain">
        <Container className="py-16 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Product range"
              title="Products for printing and garment production."
              description="Explore our range of inks, chemicals, ribbons, machinery, lace and certified leather patches."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-line bg-white px-5 py-3 shadow-soft">
              <FiSearch aria-hidden="true" className="shrink-0 text-primary" />
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product, origin or application"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-lightgray"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="space-y-4">
            {visibleGroups.map((group) => (
              <ProductGroupAccordion key={group.heading} group={group} />
            ))}
          </div>
          {visibleGroups.length === 0 && (
            <div className="rounded-2xl border border-line bg-porcelain px-6 py-12 text-center">
              <p className="font-base text-lg font-semibold text-ink">No matching products</p>
              <p className="mt-2 text-sm text-softgray">Try another name or application.</p>
              <ButtonLink href="/contact" variant="outline" className="mt-6">
                Request a product
              </ButtonLink>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Product;
