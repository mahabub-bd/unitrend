import { data, images } from "../../Constants";
import {
  Copyright,
  Developer,
  EmailLink,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSection,
  LinkHead,
  Paragraph,
  Social,
  StyledFiFacebook,
  StyledFiInstagram,
  StyledFiLinkedin, // Add map pin icon
  StyledFiMail,
  StyledFiMapPin, // Add mail icon
  StyledFiPhoneCall, // Add phone call icon
  StyledFiTwitter,
  StyledYoutube,
} from "./Footer.Styles";

const year = new Date().getFullYear();
const Footer = () => (
  <FooterSection>
    <FooterLinks>
      <FooterLink>
        <LinkHead>Contact Us</LinkHead>
        <Paragraph>
          <StyledFiMapPin /> {data.contact.address}
        </Paragraph>
        <Paragraph>
          <EmailLink href="mailto:info@unitrendinternational.com">
            <StyledFiMail /> {data.contact.email1}
          </EmailLink>
        </Paragraph>
        <Paragraph>
          <EmailLink href="mailto:admin@unitrendbd.net">
            <StyledFiMail /> {data.contact.email2}
          </EmailLink>
        </Paragraph>
        <Paragraph>
          <EmailLink href="tel:+8801894966260">
            <StyledFiPhoneCall /> {data.contact.phone}
          </EmailLink>
        </Paragraph>
      </FooterLink>

      <FooterLink>
        <FooterLogo src={images.logoround} alt="footer_logo" />
        <Paragraph>
          &quot;Simply solutions of reliable and trustworthy sourcing and
          supply.&quot;
        </Paragraph>

        <Social>
          <StyledFiFacebook />
          <StyledFiLinkedin />
          <StyledYoutube />
          <StyledFiTwitter />
          <StyledFiInstagram />
        </Social>
      </FooterLink>

      <FooterLink>
        <LinkHead>Unitrend International</LinkHead>
        <Paragraph>Working Hours</Paragraph>
        <Paragraph>
          <strong>Satarday - Thursday : </strong>
          {"09:00 Am - 06:00 Pm "}
        </Paragraph>

        <Paragraph>
          <Developer href="profile">Company Profile</Developer>
        </Paragraph>
      </FooterLink>
    </FooterLinks>

    <Copyright>
      <Paragraph>
        {" "}
        &copy; {year} Unitrend International All Rights Reserved.
      </Paragraph>
      <Paragraph>
        <Developer href="http://mahabub.me">
          Developed By Mahabub Hossain
        </Developer>
      </Paragraph>
    </Copyright>
  </FooterSection>
);

export default Footer;
