import styled from 'styled-components';
import { colors, device, fonts } from '../../../Constants';

const FormWrapper = styled.div`
    width: 60%;
    margin: 1.5rem auto;
    padding: 3rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;

    overflow: hidden;
    transition: all 0.3s ease-in-out;
    @media ${device.laptopL} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 100%;
        min-height: 450px;
        padding: 2rem;
        margin-left: 1rem;
    }
    @media ${device.tablet} {
        width: 95%;
        min-height: 450px;
        margin: 1rem auto;
    }
`;
const Title = styled.p`
    text-align: center;
    font-size: 2rem;

    font-family: ${fonts.base};
    font-weight: semibold;
    color: ${colors.Gray};
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
`;
const InputContainer = styled.div`
    width: 100%;
`;
const Input = styled.input`
    height: 35px;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    border-color: #dadada;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;

    line-height: 1.5;
    color: ${colors.Gray};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &::placeholder {
        color: ${colors.Grey};
        font-size: 1.6rem;
    }
    &:focus {
        outline: none;
    }
`;
const Textbox = styled.textarea`
    width: 100%;
    height: 105px;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    border-color: #dadada;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;

    line-height: 1.5;
    color: ${colors.Gray};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &::placeholder {
        color: ${colors.Grey};
        font-size: 1.6rem;
    }
    &:focus {
        outline: none;
    }
`;
const Label = styled.label`
    width: 100%;
    font-size: 1.6rem;
    font-family: ${fonts.base};
    font-weight: semibold;
    color: ${colors.Gray};
    margin-top: 0.6rem;
`;
const Button = styled.button`
    background: ${colors.Primary};
    border: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;

    color: ${colors.White};
    cursor: pointer;
    font-family: ${fonts.base};
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 0.6rem 1.5rem;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;
export { Button, Title, FormWrapper, Input, Label, Textbox, InputContainer };

// E
