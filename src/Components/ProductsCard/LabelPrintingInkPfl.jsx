import {
    CTable,
    CTableBody,
    CTableHead,
    // eslint-disable-next-line prettier/prettier
    CTableRow
} from '@coreui/react';
import { data } from '../../Constants';
import { TableDataCell, TableHeaderCell } from './ProductsCard';

function LabelPrintingInkPfl() {
    return (
        <div>
            <CTable striped hover middle responsive="sm">
                <CTableHead>
                    <CTableRow>
                        <TableHeaderCell scope="col">SL</TableHeaderCell>
                        <TableHeaderCell scope="col">Product Name</TableHeaderCell>
                        <TableHeaderCell scope="col">Type</TableHeaderCell>
                        <TableHeaderCell scope="col">Origin</TableHeaderCell>
                        <TableHeaderCell scope="col">Application</TableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {data.labelPrintingInkPfl.map((item) => (
                        <CTableRow>
                            <TableHeaderCell scope="row">{item.row}</TableHeaderCell>
                            <TableDataCell>{item.productName}</TableDataCell>
                            <TableDataCell>{item.type}</TableDataCell>
                            <TableDataCell>{item.origin}</TableDataCell>
                            <TableDataCell>{item.application}</TableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    );
}

export default LabelPrintingInkPfl;
