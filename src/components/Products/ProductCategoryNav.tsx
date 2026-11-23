import {
  FiAward,
  FiChevronRight,
  FiDroplet,
  FiGrid,
  FiPackage,
  FiSettings,
  FiTag,
} from "react-icons/fi";
import { slugifyCategory } from "@/components/Products/productUtils";
import { cn } from "@/lib/utils";

export interface CategoryNavItem {
  heading: string;
  count: number;
  total: number;
  open: boolean;
}

const iconFor = (heading: string) => {
  const name = heading.toLowerCase();
  if (name.includes("ink") || name.includes("chemical")) return FiDroplet;
  if (name.includes("ribbon")) return FiTag;
  if (name.includes("lace")) return FiGrid;
  if (name.includes("machine")) return FiSettings;
  if (name.includes("leather") || name.includes("patch")) return FiAward;
  return FiPackage;
};

const ProductCategoryNav = ({
  items,
  onSelect,
}: {
  items: CategoryNavItem[];
  onSelect: (heading: string) => void;
}) => (
  <div className="rounded-2xl border border-line bg-white p-2">
    <div className="flex items-center justify-between px-3 py-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        Categories
      </p>
      <span className="rounded-full bg-porcelain px-2 py-0.5 text-[10px] font-semibold tabular-nums text-primary">
        {items.length}
      </span>
    </div>

    <nav aria-label="Product categories" className="flex flex-col gap-0.5">
      {items.length === 0 && (
        <p className="px-3 py-3 text-[11px] leading-5 text-muted">
          No categories match your search.
        </p>
      )}
      {items.map((item) => {
        const Icon = iconFor(item.heading);
        const count =
          item.count < item.total
            ? `${item.count} of ${item.total}`
            : String(item.total);
        const label = `${count} ${item.total === 1 ? "product" : "products"}`;

        return (
          <button
            key={item.heading}
            type="button"
            onClick={() => onSelect(item.heading)}
            aria-controls={`category-panel-${slugifyCategory(item.heading)}`}
            className={cn(
              "group flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors duration-200 2xl:gap-3 2xl:px-3 2xl:py-2.5",
              item.open
                ? "bg-porcelain text-primary"
                : "text-softgray hover:bg-porcelain/70 hover:text-primary"
            )}
          >
            <span
              className={cn(
                "grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors duration-200 2xl:h-9 2xl:w-9",
                item.open
                  ? "bg-primary text-white"
                  : "bg-primary/5 text-primary group-hover:bg-primary/10"
              )}
            >
              <Icon aria-hidden="true" className="text-[13px]" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="line-clamp-2 block text-[12px] font-semibold leading-4 2xl:text-[13px] 2xl:leading-5">
                {item.heading}
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.08em] text-muted 2xl:text-[11px]">
                {label}
              </span>
            </span>

            <FiChevronRight
              aria-hidden="true"
              className={cn(
                "shrink-0 text-sm transition-all duration-200",
                item.open
                  ? "text-primary"
                  : "-translate-x-1 text-lightgray opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              )}
            />
          </button>
        );
      })}
    </nav>
  </div>
);

export default ProductCategoryNav;
