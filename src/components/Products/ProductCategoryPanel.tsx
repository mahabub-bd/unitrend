import Link from "next/link";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import ProductsTable, { ProductRow } from "@/components/Products/ProductsTable";
import { distinctValues } from "@/components/Products/productUtils";
import { cn } from "@/lib/utils";

export interface ProductGroup {
  heading: string;
  rows: ProductRow[];
  showType?: boolean;
  showBrand?: boolean;
}

interface ProductCategoryPanelProps {
  group: ProductGroup;
  rows: ProductRow[];
  index: number;
  slug: string;
  open: boolean;
  query: string;
  headingMatched: boolean;
  onToggle: () => void;
}

const ProductCategoryPanel = ({
  group,
  rows,
  index,
  slug,
  open,
  query,
  headingMatched,
  onToggle,
}: ProductCategoryPanelProps) => {
  const triggerId = `category-trigger-${slug}`;
  const panelId = `category-panel-${slug}`;
  const origins = distinctValues(group.rows, "origin");
  const productLabel = `${group.rows.length} product${group.rows.length === 1 ? "" : "s"}`;
  const countLabel =
    query && !headingMatched
      ? `${rows.length} of ${productLabel}`
      : productLabel;

  return (
    <div
      id={`category-${slug}`}
      className={cn(
        "scroll-mt-44 overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
        open ? "border-primary/20" : "border-line hover:border-primary/20"
      )}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "group flex w-full cursor-pointer items-center gap-3.5 px-4 py-4 text-left transition-colors duration-300 sm:gap-4 sm:px-6 sm:py-5",
            open ? "bg-porcelain/60" : "hover:bg-porcelain/60"
          )}
        >
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-xl border font-base text-[12px] font-semibold tabular-nums transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm",
              open
                ? "border-primary bg-primary text-white"
                : "border-line bg-porcelain text-primary group-hover:border-primary/30"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="font-base text-[14px] font-semibold leading-5 text-ink sm:text-[17px] sm:leading-6">
                {group.heading}
              </span>
              {query && headingMatched && (
                <span className="rounded-full bg-cream px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-primary">
                  Category match
                </span>
              )}
            </span>
            <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] leading-4 text-muted sm:text-xs">
              <span>{countLabel}</span>
              {origins.length > 0 && (
                <>
                  <span aria-hidden="true" className="text-line">
                    |
                  </span>
                  <span>{origins.join(" · ")}</span>
                </>
              )}
            </span>
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full border text-base transition-all duration-300",
              open
                ? "border-primary bg-primary text-white"
                : "border-line text-primary group-hover:border-primary/30"
            )}
          >
            <FiChevronDown
              className={cn("transition-transform duration-300", open && "rotate-180")}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        inert={!open}
        className={cn(
          "grid transition-all duration-500 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line bg-porcelain/40 px-3 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
            <ProductsTable
              rows={rows}
              showType={group.showType !== false}
              showBrand={group.showBrand}
              query={query}
            />

            <div className="mt-3 flex flex-col gap-2 border-t border-line/70 px-1 pt-3 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:pt-4">
              <p className="text-[11px] leading-5 text-muted">
                Need a different size, colour or specification?
              </p>
              <Link
                href="/contact"
                className="group/link inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary"
              >
                Request a quote
                <FiArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPanel;
