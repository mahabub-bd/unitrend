import { images } from "../../Constants";
import { Wrapper, WrapperImageReverse, WrapperInfo } from "../../GlobalStyle";
import { BackgroundSection, Image, Paragraph } from "./About.Styles";

function Background() {
  return (
    <BackgroundSection>
      <Wrapper>
        <WrapperImageReverse>
          <Image src={images.hero} alt="backgroundimage" loading="lazy" />
        </WrapperImageReverse>
        <WrapperInfo>
          <Paragraph>
            <Paragraph>Unitrend International</Paragraph>
            <Paragraph>
              Business Type: Importer, Indenting , Distribution &amp; Supply
            </Paragraph>
            {"Principals Business Partners: "}

            <p> 👉 Deri Desen Label, Turkey</p>
            <p> 👉 Guangzhou Print Area Technology Co Ltd</p>
            <p> 👉 Impress Printing, Hong Kong</p>
            <p> 👉 Tuton Textile </p>
            <p> 👉 Huzhou Hengxin Label Manaufacture CO.,LTD</p>

            <Paragraph>Authorized Region: Bangladesh</Paragraph>
            <Paragraph> Year of Establishment: 2020</Paragraph>
          </Paragraph>
        </WrapperInfo>
      </Wrapper>
    </BackgroundSection>
  );
}

export default Background;
