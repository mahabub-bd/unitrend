"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeadphones,
  FiMinus,
  FiPackage,
  FiPlus,
  FiSearch,
  FiX,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductCategoryNav, {
  CategoryNavItem,
} from "@/components/Products/ProductCategoryNav";
import ProductCategoryPanel, {
  ProductGroup,
} from "@/components/Products/ProductCategoryPanel";
import {
  distinctValues,
  searchableRow,
  slugifyCategory,
} from "@/components/Products/productUtils";
import { data } from "@/constants/data";

const fallbackGroups: ProductGroup[] = [
  { heading: "Textile Label Printing Ink (PFL)", rows: data.labelPrintingInkPfl },
  { heading: "Textile Label Printing Ink (SCREEN)", rows: data.labelPrintingInkScreen },
  { heading: "Offset Printing Ink & Chemicals", rows: data.offsetprintingink },
  { heading: "Lace", rows: data.lace },
  { heading: "Textile Label Printing Ribbon", rows: data.labelprintingribbon },
  { heading: "Textile Label Printing Machine", rows: data.labelprintingmachine, showType: false },
  { heading: "Leather Patch", rows: data.leatherpatch, showBrand: true },
];

const popularSearches = ["Ink", "Lace", "Ribbon", "Leather"];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollToElement = (element: HTMLElement | null) => {
  element?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
};

const SearchField = ({
  query,
  inputRef,
  onChange,
  onClear,
}: {
  query: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (value: string) => void;
  onClear: () => void;
}) => (
  <div className="relative w-full md:max-w-sm lg:max-w-md">
    <FiSearch
      aria-hidden="true"
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-primary"
    />
    <label htmlFor="product-search" className="sr-only">
      Search products
    </label>
    <input
      ref={inputRef}
      id="product-search"
      type="search"
      value={query}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClear();
      }}
      placeholder="Search product, origin or application…"
      autoComplete="off"
      className="h-11 w-full rounded-full border border-line bg-white pl-11 pr-11 text-sm text-ink shadow-[0_1px_2px_rgba(12,12,12,0.04)] outline-none transition-all duration-300 placeholder:text-lightgray focus:border-primary/30 focus:shadow-soft sm:h-12 [&::-webkit-search-cancel-button]:appearance-none"
    />
    {query ? (
      <button
        type="button"
        onClick={() => {
          onClear();
          inputRef.current?.focus();
        }}
        aria-label="Clear search"
        className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-porcelain text-[13px] text-muted transition-colors duration-200 hover:bg-primary hover:text-white sm:right-2.5 sm:h-8 sm:w-8"
      >
        <FiX aria-hidden="true" />
      </button>
    ) : (
      <kbd
        aria-hidden="true"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-line bg-porcelain px-1.5 py-0.5 font-alt text-[10px] font-semibold text-muted sm:block"
      >
        /
      </kbd>
    )}
  </div>
);

const RangeOverview = ({
  categories,
  products,
  origins,
}: {
  categories: number;
  products: number;
  origins: string[];
}) => {
  const stats = [
    { label: "Categories", value: categories },
    { label: "Products", value: products },
    { label: "Origins", value: origins.length },
  ];

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-6 shadow-soft sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-line"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-golden/50"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Range at a glance
          </p>
          <p className="mt-2 font-base text-[15px] font-semibold leading-6 text-ink">
            A complete production catalogue
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-lg text-primary">
          <FiPackage aria-hidden="true" />
        </span>
      </div>

      <dl className="relative mt-6 grid grid-cols-3 divide-x divide-line border-y border-line py-5">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 text-center">
            <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </dt>
            <dd className="mt-1.5 font-base text-xl font-semibold tabular-nums text-ink sm:text-2xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
          Sourced from
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {origins.length > 0 ? (
            origins.map((origin) => (
              <span
                key={origin}
                className="rounded-full border border-line bg-porcelain px-2.5 py-1 text-[11px] leading-none text-softgray"
              >
                {origin}
              </span>
            ))
          ) : (
            <span className="text-[11px] text-muted">Ask our team</span>
          )}
        </div>
      </div>
    </div>
  );
};

const SourcingCard = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-5 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/15"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-12 -left-8 h-24 w-24 rounded-full bg-secondary/50 blur-2xl"
    />
    <div className="relative">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-golden">
        <FiHeadphones aria-hidden="true" />
      </span>
      <p className="mt-4 font-base text-sm font-semibold leading-5">
        Need a specification we don&apos;t list?
      </p>
      <p className="mt-1.5 text-[11px] leading-5 text-white/70">
        We source to order and can arrange samples for evaluation.
      </p>
      <Link
        href="/contact"
        className="group mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-golden transition-colors duration-200 hover:text-white"
      >
        Request a quote
        <FiArrowRight
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  </div>
);

const Product = ({ groups = fallbackGroups }: { groups?: ProductGroup[] }) => {
  const [query, setQuery] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    groups[0] ? { [slugifyCategory(groups[0].heading)]: true } : {}
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const totals = useMemo(() => {
    const products = groups.reduce((sum, group) => sum + group.rows.length, 0);
    const origins = [...new Set(distinctValues(groups.flatMap((group) => group.rows), "origin"))];
    return { categories: groups.length, products, origins };
  }, [groups]);

  const filteredGroups = useMemo(() => {
    return groups
      .map((group, index) => {
        if (!normalizedQuery) {
          return { group, index, rows: group.rows, headingMatched: false };
        }

        const headingMatched = group.heading.toLowerCase().includes(normalizedQuery);
        const rows = headingMatched
          ? group.rows
          : group.rows.filter((row) => searchableRow(row).includes(normalizedQuery));

        return { group, index, rows, headingMatched };
      })
      .filter((entry) => entry.headingMatched || entry.rows.length > 0);
  }, [groups, normalizedQuery]);

  const resultCount = filteredGroups.reduce(
    (sum, entry) => sum + entry.rows.length,
    0
  );

  const isOpen = (heading: string) =>
    normalizedQuery ? true : Boolean(openGroups[slugifyCategory(heading)]);

  const allOpen =
    filteredGroups.length > 0 &&
    filteredGroups.every((entry) => isOpen(entry.group.heading));

  const toggleGroup = (heading: string) => {
    const slug = slugifyCategory(heading);
    setOpenGroups((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const toggleAll = () => {
    const next = !allOpen;
    setOpenGroups((prev) => {
      const state = { ...prev };
      groups.forEach((group) => {
        state[slugifyCategory(group.heading)] = next;
      });
      return state;
    });
  };

  const openCategory = (heading: string) => {
    const slug = slugifyCategory(heading);
    setOpenGroups((prev) => ({ ...prev, [slug]: true }));
    scrollToElement(document.getElementById(`category-${slug}`));
  };

  const applySuggestion = (value: string) => {
    setQuery(value);
    scrollToElement(document.getElementById("catalog-toolbar"));
  };

  // "/" focuses search from anywhere on the page.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Support deep links such as /product#leather-patch, including hash changes
  // that happen while the page is already open.
  useEffect(() => {
    let timer = 0;

    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!hash) return;

      const target = groups.find(
        (group) =>
          slugifyCategory(group.heading) === hash ||
          `category-${slugifyCategory(group.heading)}` === hash
      );
      if (!target) return;

      const slug = slugifyCategory(target.heading);
      setQuery("");
      setOpenGroups((prev) => ({ ...prev, [slug]: true }));

      window.clearTimeout(timer);
      timer = window.setTimeout(
        () => scrollToElement(document.getElementById(`category-${slug}`)),
        150
      );
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [groups]);

  const navItems: CategoryNavItem[] = filteredGroups.map((entry) => ({
    heading: entry.group.heading,
    count: entry.rows.length,
    total: entry.group.rows.length,
    open: isOpen(entry.group.heading),
  }));

  const summary = normalizedQuery
    ? `${resultCount} ${resultCount === 1 ? "result" : "results"} in ${
        filteredGroups.length
      } ${filteredGroups.length === 1 ? "category" : "categories"}`
    : `${totals.categories} categories · ${totals.products} products`;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-porcelain">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-primary/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-52 w-52 rounded-full border border-golden/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
        />

        <Container className="relative py-14 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <SectionHeading
                eyebrow="Product range"
                title="Products for printing and garment production."
                description="Explore our range of inks, chemicals, ribbons, machinery, lace and certified leather patches — sourced from trusted manufacturers and supported locally."
              />
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Popular
                </span>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => applySuggestion(term)}
                    className="cursor-pointer rounded-full border border-line bg-white/70 px-3 py-1.5 text-[11px] font-medium text-softgray transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <RangeOverview
                categories={totals.categories}
                products={totals.products}
                origins={totals.origins}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 lg:pb-24" aria-label="Product catalogue">
        <div
          id="catalog-toolbar"
          className="sticky top-[76px] z-30 scroll-mt-20 border-b border-line/80 bg-white/85 backdrop-blur-md"
        >
          <Container className="flex flex-col gap-2.5 py-3 md:flex-row md:items-center md:justify-between md:gap-5">
            <SearchField
              query={query}
              inputRef={inputRef}
              onChange={setQuery}
              onClear={() => setQuery("")}
            />

            <div className="flex items-center justify-between gap-3 md:justify-end">
              <p
                role="status"
                aria-live="polite"
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em] text-muted"
              >
                {summary}
              </p>

              {!normalizedQuery && (
                <button
                  type="button"
                  onClick={toggleAll}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-softgray transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                >
                  {allOpen ? (
                    <FiMinus aria-hidden="true" className="text-xs" />
                  ) : (
                    <FiPlus aria-hidden="true" className="text-xs" />
                  )}
                  {allOpen ? "Collapse all" : "Expand all"}
                </button>
              )}
            </div>
          </Container>
        </div>

        <Container className="pt-8 lg:pt-10">
          <div className="grid gap-8 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)] 2xl:gap-12">
            <aside className="hidden lg:block" aria-label="Catalogue navigation">
              <div className="sticky top-[172px] space-y-4">
                <ProductCategoryNav items={navItems} onSelect={openCategory} />
                <SourcingCard />
              </div>
            </aside>

            <div className="min-w-0">
              {filteredGroups.length > 0 ? (
                <div className="space-y-3.5 sm:space-y-4">
                  {filteredGroups.map((entry) => {
                    const slug = slugifyCategory(entry.group.heading);

                    return (
                      <ProductCategoryPanel
                        key={entry.group.heading}
                        group={entry.group}
                        rows={entry.rows}
                        index={entry.index}
                        slug={slug}
                        open={isOpen(entry.group.heading)}
                        query={normalizedQuery}
                        headingMatched={entry.headingMatched}
                        onToggle={() => toggleGroup(entry.group.heading)}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-line bg-porcelain px-6 py-14 text-center sm:py-16">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line bg-white text-xl text-primary shadow-soft">
                    <FiSearch aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-base text-lg font-semibold text-ink">
                    No products match &ldquo;{query.trim()}&rdquo;
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-softgray">
                    Try a different keyword such as &ldquo;ink&rdquo;, &ldquo;lace&rdquo; or
                    &ldquo;leather&rdquo; — or ask our team and we will source it for you.
                  </p>
                  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        inputRef.current?.focus();
                      }}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-secondary"
                    >
                      <FiX aria-hidden="true" />
                      Clear search
                    </button>
                    <ButtonLink href="/contact" variant="outline">
                      Request a product
                    </ButtonLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
