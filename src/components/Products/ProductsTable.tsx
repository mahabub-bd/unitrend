export interface ProductRow {
  row: number;
  productName: string;
  type?: string;
  brand?: string;
  origin: string;
  application: string;
}

const thClass =
  "whitespace-nowrap px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary";
const tdClass =
  "px-3 py-3 text-xs leading-5 text-softgray";

const ProductsTable = ({
  rows,
  showType = true,
  showBrand = false,
}: {
  rows: ProductRow[];
  showType?: boolean;
  showBrand?: boolean;
}) => (
  <div className="overflow-x-auto">
    <table className="min-w-[760px] w-full border-collapse text-left">
      <thead>
        <tr>
          <th className={thClass}>SL</th>
          <th className={thClass}>Product Name</th>
          {showType && <th className={thClass}>Type</th>}
          {showBrand && <th className={thClass}>Brand</th>}
          <th className={thClass}>Origin</th>
          <th className={thClass}>Application</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, i) => (
          <tr
            key={i}
            className="odd:bg-white even:bg-palettelight hover:bg-cream/50"
          >
            <td className={tdClass}>{item.row}</td>
            <td className={tdClass}>{item.productName}</td>
            {showType && <td className={tdClass}>{item.type}</td>}
            {showBrand && <td className={tdClass}>{item.brand}</td>}
            <td className={tdClass}>{item.origin}</td>
            <td className={tdClass}>{item.application}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductsTable;
