import { cn } from "@/lib/utils";

export interface ProductRow {
  row?: number;
  productName: string;
  type?: string;
  brand?: string;
  origin: string;
  application: string;
}

const thClass =
  "whitespace-nowrap px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary";
const badgeClass =
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium leading-[1.35]";

const Highlight = ({ text, query }: { text?: string; query?: string }) => {
  if (!text) return <span className="text-lightgray">—</span>;
  if (!query) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const needle = query.toLowerCase();

  return (
    <>
      {text.split(new RegExp(`(${escaped})`, "gi")).map((part, index) =>
        part.toLowerCase() === needle ? (
          <mark
            key={index}
            className="rounded-[3px] bg-golden/50 px-0.5 text-ink"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

const ProductsTable = ({
  rows,
  showType = true,
  showBrand = false,
  query = "",
}: {
  rows: ProductRow[];
  showType?: boolean;
  showBrand?: boolean;
  query?: string;
}) => (
  <>
    {/* Phones: stacked cards instead of a horizontally scrolling table. */}
    <div className="space-y-2.5 md:hidden">
      {rows.map((item, index) => (
        <article
          key={`${item.productName}-${item.origin}-${index}`}
          className="rounded-xl border border-line bg-white p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-base text-[13px] font-semibold leading-5 text-ink">
              <Highlight text={item.productName} query={query} />
            </h4>
            <span className="mt-0.5 shrink-0 text-[10px] font-semibold tabular-nums tracking-[0.08em] text-lightgray">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {(showType || showBrand) && (item.type || item.brand) && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {showType && item.type && (
                <span className={cn(badgeClass, "border-line bg-porcelain text-softgray")}>
                  <Highlight text={item.type} query={query} />
                </span>
              )}
              {showBrand && item.brand && (
                <span className={cn(badgeClass, "whitespace-nowrap border-primary/10 bg-primary/5 text-primary")}>
                  <Highlight text={item.brand} query={query} />
                </span>
              )}
            </div>
          )}

          <dl className="mt-3 grid grid-cols-2 gap-3 border-t border-line/70 pt-3">
            <div>
              <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                Origin
              </dt>
              <dd className="mt-1 text-[12px] leading-5 text-softgray">
                <Highlight text={item.origin} query={query} />
              </dd>
            </div>
            <div>
              <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                Application
              </dt>
              <dd className="mt-1 text-[12px] leading-5 text-softgray">
                <Highlight text={item.application} query={query} />
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>

    {/* Tablet and up: compact data table. */}
    <div className="hidden md:block">
      <div className="overflow-x-auto rounded-xl border border-line bg-white">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">Product options</caption>
          <colgroup>
            <col className="w-12" />
            <col className="w-[34%]" />
            {showType && <col className="w-[16%]" />}
            {showBrand && <col className="w-[13%]" />}
            <col className="w-[13%]" />
            <col />
          </colgroup>
          <thead>
            <tr className="bg-sand/50">
              <th scope="col" className={cn(thClass, "w-14 pl-4")}>
                #
              </th>
              <th scope="col" className={thClass}>
                Product name
              </th>
              {showType && (
                <th scope="col" className={thClass}>
                  Type
                </th>
              )}
              {showBrand && (
                <th scope="col" className={thClass}>
                  Brand
                </th>
              )}
              <th scope="col" className={thClass}>
                Origin
              </th>
              <th scope="col" className={cn(thClass, "pr-4")}>
                Application
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr
                key={`${item.productName}-${item.origin}-${index}`}
                className="border-t border-line/70 transition-colors duration-200 hover:bg-porcelain/70"
              >
                <td className="py-3 pl-4 pr-3 text-[11px] font-semibold tabular-nums text-lightgray">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-3 py-3 text-[13px] font-semibold leading-5 text-ink">
                  <Highlight text={item.productName} query={query} />
                </td>
                {showType && (
                  <td className="px-3 py-3">
                    {item.type ? (
                      <span className={cn(badgeClass, "border-line bg-white text-softgray")}>
                        <Highlight text={item.type} query={query} />
                      </span>
                    ) : (
                      <span className="text-xs text-lightgray">—</span>
                    )}
                  </td>
                )}
                {showBrand && (
                  <td className="px-3 py-3">
                    {item.brand ? (
                      <span className={cn(badgeClass, "whitespace-nowrap border-primary/10 bg-primary/5 text-primary")}>
                        <Highlight text={item.brand} query={query} />
                      </span>
                    ) : (
                      <span className="text-xs text-lightgray">—</span>
                    )}
                  </td>
                )}
                <td className="px-3 py-3">
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-softgray">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-golden"
                    />
                    <Highlight text={item.origin} query={query} />
                  </span>
                </td>
                <td className="py-3 pl-3 pr-4 text-[12px] leading-5 text-muted">
                  <Highlight text={item.application} query={query} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default ProductsTable;
