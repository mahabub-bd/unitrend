import { AiFillLinkedin } from "react-icons/ai";

import { RxInstagramLogo } from "react-icons/rx";

import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiMapPin2Fill, RiPhoneFill, RiYoutubeFill } from "react-icons/ri";
import styled from "styled-components";
import { colors, device, fonts } from "../../Constants";
import { Paragraph3, SectionPadding } from "../../GlobalStyle";

const FooterSection = styled(SectionPadding)`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-image: linear-gradient(
    to bottom,
    #2f3c3b 0%,
    ${colors.Black} 100%
  );
  padding: 6rem 2rem;
  @media ${device.tablet} {
    padding: 2rem 2rem;
  }
`;

const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 5rem;
  padding: 0 2rem;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const FooterLink = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: center;

  @media (max-width: 1150px) {
    margin: 2rem 0;
    width: 100%;
  }
`;

const LinkHead = styled.h1`
  font-family: ${fonts.base};
  color: ${colors.White};
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-size: 3rem;
  line-height: 41.6px;
  margin-bottom: 2.8rem;
  @media ${device.tablet} {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  @media (min-width: 2000px) {
    font-size: 51px;
    line-height: 61.6px;
  }
`;

const StyledFiMail = styled(MdOutlineEmail)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 1.8rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;

const StyledFiMapPin = styled(RiMapPin2Fill)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 1.8rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;

const StyledFiPhoneCall = styled(RiPhoneFill)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 1.8rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;

const FooterLogo = styled.img`
  width: 50px;
  margin-bottom: 0.75rem;
`;

const StyledFiFacebook = styled(FaFacebookSquare)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 1.7rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;

const StyledFiInstagram = styled(RxInstagramLogo)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 2rem;
  width: 2rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;
const StyledFiTwitter = styled(FaTwitterSquare)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 1.6rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;

const StyledFiLinkedin = styled(AiFillLinkedin)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 2rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;
const StyledYoutube = styled(RiYoutubeFill)`
  color: ${colors.White};
  margin: 0.7rem;
  width: 2.2rem;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${colors.Secondry};
  }
`;
const Social = styled.div`
  margin-top: 2rem;
`;

const Paragraph = styled(Paragraph3)`
  margin: 1rem 0;
  text-align: center;
  font-size: 1.8rem;
  @media ${device.laptopL} {
    font-size: 1.6rem;
  }
  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-family: ${fonts.alt};
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;
const EmailLink = styled.a`
  color: ${colors.White};
  font-family: ${fonts.base};
  text-transform: lowercase;
  text-align: center;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.Secondry};
  }
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;
const Developer = styled(EmailLink)`
  text-transform: capitalize;
  font-size: 1.4rem;
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;
export {
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
  StyledFiLinkedin,
  StyledFiMail,
  StyledFiMapPin,
  StyledFiPhoneCall,
  StyledFiTwitter,
  StyledYoutube,
};
