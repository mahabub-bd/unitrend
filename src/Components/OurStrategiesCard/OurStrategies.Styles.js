import styled from 'styled-components';
import { colors, device, fonts } from '../../Constants';

const OurStrategiesCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0px 8px;
    @media ${device.laptop} {
        margin-top: 2rem;
    }
`;

const OurStrategiesImage = styled.img`
    margin: 0 auto;
    border: 0.001rem solid ${colors.Gray};
    padding: 1.5rem;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: rotate3d(5, 5, 5, 10deg);
    }
`;
const OurStrategiesTitle = styled.h1`
    text-align: center;
    margin-top: 4rem;
    font-family: ${fonts.base};
    @media ${device.laptop} {
        margin-top: 2rem;
    }
    color: ${colors.Primary};
`;

export { OurStrategiesImage, OurStrategiesTitle, OurStrategiesCardWrapper };

// export default OurStrategiesCard;
