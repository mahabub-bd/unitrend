import styled from 'styled-components';
import { colors, device } from '../../Constants';
import { FlexCenter } from '../../GlobalStyle';

const MapSection = styled(FlexCenter)`
    padding: 0;
    margin-top: 2rem;
    @media ${device.tablet} {
        margin-top: 1rem;
    }
`;

const Button = styled.button`
    background: ${colors.primary};
    border: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
    font-size: 0.9em;
    margin: 5px;
    padding: 10px 15px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`;
const SuccessMessage = styled.p`
    color: ${colors.Green};
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    margin: 5px;
    padding: 10px 15px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`;
const ErrorMessage = styled.p``;
const Link = styled.a`
    color: ${colors.Black};
    text-transform: lowercase;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: ${colors.Primary};
    }
`;

export { Button, MapSection, SuccessMessage, ErrorMessage, Link };

// Export
