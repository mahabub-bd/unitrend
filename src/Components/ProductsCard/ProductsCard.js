import { CTableDataCell, CTableHeaderCell } from '@coreui/react';
import styled from 'styled-components';
import { device, fonts } from '../../Constants';

const TableHeaderCell = styled(CTableHeaderCell)`
    font-size: 2rem;
    @media ${device.laptopL} {
        font-size: 1.8rem;
    }
    padding: 0.5rem;
    font-family: ${fonts.base};
    text-transform: capitalize;
    @media ${device.tablet} {
        font-size: 1.1rem;
        padding: 0.3rem;
    }
`;
const TableDataCell = styled(CTableDataCell)`
    font-size: 1.8rem;
    text-transform: capitalize;
    font-family: ${fonts.base};
    padding: 0.5rem;
    @media ${device.laptopL} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        font-size: 1.4rem;
    }
    @media ${device.tablet} {
        font-size: 1.2rem;
        padding: 0.3rem;
    }
`;

export { TableHeaderCell, TableDataCell };

// export
