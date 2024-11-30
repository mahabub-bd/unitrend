import { images } from '../../Constants';
import { Wrapper, WrapperImageReverse, WrapperInfo } from '../../GlobalStyle';
import { BackgroundSection, Image, Paragraph } from './About.Styles';

function Background() {
    return (
        <BackgroundSection>
            <Wrapper>
                <WrapperImageReverse>
                    <Image src={images.hero} alt="backgroundimage" loading="lazy" />
                </WrapperImageReverse>
                <WrapperInfo>
                    <Paragraph left>
                        <Paragraph left>Unitrend International</Paragraph>
                        <Paragraph>
                            Business Type: Importer, Indenting , Distribution &amp; Supply
                        </Paragraph>
                        {'Principals Business Partners: '}
                        <ul>
                            <li> 👉 Deri Desen Label, Turkey</li>
                            <li> 👉 Guangzhou Print Area Technology Co Ltd</li>
                            <li> 👉 Impress Printing, Hong Kong</li>
                            <li> 👉 Tuton Textile </li>
                            <li> 👉 Huzhou Hengxin Label Manaufacture CO.,LTD</li>
                        </ul>

                        <Paragraph>Authorized Region: Bangladesh</Paragraph>
                        <Paragraph> Year of Establishment: 2020</Paragraph>
                    </Paragraph>
                </WrapperInfo>
            </Wrapper>
        </BackgroundSection>
    );
}

export default Background;
