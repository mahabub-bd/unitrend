import { ContactForm, ContactInfo, HeadingPrimary, HeadingSecondary, Map } from '../../Components';

import { Wrapper, WrapperInfo } from '../../GlobalStyle';
import { ContactsSection } from './Contacts.Styles';

function Contacts() {
    return (
        <>
            <ContactsSection>
                <HeadingPrimary title="Contacts Us" />
                <HeadingSecondary title="Let's Start Something great together. Get in touch with one of the team today!" />
                <Wrapper>
                    <WrapperInfo>
                        <ContactInfo />
                    </WrapperInfo>
                    <WrapperInfo>
                        <ContactForm />
                    </WrapperInfo>
                </Wrapper>
            </ContactsSection>
            <Map />
        </>
    );
}

export default Contacts;
