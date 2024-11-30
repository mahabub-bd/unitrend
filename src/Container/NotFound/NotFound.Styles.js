import styled from 'styled-components';
import { FlexCenter } from '../../GlobalStyle';

const NotFoundContainer = styled(FlexCenter)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vh;
    margin: 5rem 0;
`;
const WrapperButton = styled.div`
    display: flex;
    gap: 3rem;
`;
export { NotFoundContainer, WrapperButton };

// export
