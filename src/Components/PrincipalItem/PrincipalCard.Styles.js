import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';

const PrincipalCardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 2rem;
    padding: 2rem;
    color: ${colors.Gray};

    box-shadow: 0 4px 8px 4px ${colors.light};
    border-radius: 15px;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
        color: ${colors.Gray};
    }
    @media ${device.laptopL} {
        margin: 1rem;
        padding: 1rem;
    }
    @media ${device.tablet} {
        margin: 1rem;
        padding: 0.5rem;
    }
`;

const PrincipalImage = styled.img`
    width: 70%;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    @media ${device.tablet} {
        width: 50%;
        margin: 1rem;
    }
`;
const PrincipalTitle = styled.h1`
    text-align: center;
    margin-top: 2rem;
    font-family: ${fonts.base};
    @media ${device.laptopL} {
        font-size: 1.8rem;
    }
    @media ${device.laptop} {
        font-size: 1.4rem;
    }
`;

export { PrincipalImage, PrincipalTitle, PrincipalCardWrapper };

// export default PrincipalItem;
