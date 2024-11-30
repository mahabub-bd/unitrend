import { Link } from "react-router-dom";
import { HeadingPrimary, HeadingSecondary } from "../../Components";
import { images } from "../../Constants";
import {
  CustomButton,
  Wrapper,
  WrapperImage,
  WrapperInfo,
} from "../../GlobalStyle";
import { HeroImage, HeroSection, Paragraph } from "./Hero.Styles";

const Hero = () => (
  <HeroSection>
    <Wrapper>
      <WrapperInfo>
        <HeadingSecondary title="Wellcome to " />
        <HeadingPrimary title="Unitrend International" />

        <Paragraph>
          Unitrend International is a privately-owned full-fledged trading and
          distribution company based in Dhaka, Bangladesh. With several years of
          experience in the field of import and distribution, we offer a
          complete range of printing machineries, printing inks, chemical and
          other consumables in both home and abroad.
        </Paragraph>

        <CustomButton type="button" as={Link} to="/contact">
          Contact Us{" "}
        </CustomButton>
      </WrapperInfo>
      <WrapperImage>
        <HeroImage src={images.office} alt="office__image" loading="lazy" />
      </WrapperImage>
    </Wrapper>
  </HeroSection>
);

export default Hero;
