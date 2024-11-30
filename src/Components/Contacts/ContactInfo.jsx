import { Paragraph1, Paragraph2 } from '../../GlobalStyle';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';

import { data } from '../../Constants';
import { Link } from './Contacts.Styles';

function ContactInfo() {
    return (
        <div>
            <HeadingSecondary title="CONTACT US" />
            <Paragraph1 center>We value our relationship and are keen to serve you</Paragraph1>
            <Paragraph2>
                If you are interested to any of our plans or if you have any queries, kindly share
                your details below. We will get back to you soon.
            </Paragraph2>

            <Paragraph2>
                <strong>Address: </strong>
                {data.contact.address}
            </Paragraph2>
            <Paragraph2>
                <strong>Email: </strong>
                <Link href="mailto:admin@unitrendinternational.com">{data.contact.email1}</Link>
                ,&nbsp;
                <Link href="mailto:admin@unitrendbd.net">{data.contact.email2}</Link>
            </Paragraph2>
            <Paragraph2>
                <strong>Call Us: </strong>
                <Link href="tel:{data.contact.phone}">{data.contact.phone}</Link>
            </Paragraph2>
        </div>
    );
}

export default ContactInfo;
