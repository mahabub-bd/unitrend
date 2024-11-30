import { Link } from 'react-router-dom';
import { HeadingPrimary, HeadingSecondary } from '../../Components';
import { CustomButton, Paragraph2 } from '../../GlobalStyle';
import { NotFoundContainer, WrapperButton } from './NotFound.Styles';

function NotFoundSection() {
    return (
        <NotFoundContainer>
            <HeadingPrimary title={404} />
            <HeadingSecondary title="opps! Page Not Found" />
            <Paragraph2>The Page You are looking for doesn&apos;t exits </Paragraph2>
            <WrapperButton>
                <CustomButton type="button" as={Link} to="/">
                    {' Home'}
                </CustomButton>
                <CustomButton type="button" as={Link} to="/contact">
                    {'Contact Us '}
                </CustomButton>
            </WrapperButton>
        </NotFoundContainer>
    );
}

export default NotFoundSection;
