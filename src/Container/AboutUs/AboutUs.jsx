import { AboutCard, Background, HeadingSecondary } from '../../Components';
import { data } from '../../Constants';
import { AboutUsSection } from './AboutUs.Styles';

function AboutUs() {
    return (
        <AboutUsSection>
            <HeadingSecondary title="Company Background" />
            <Background />
            {data.aboutData.map((item) => (
                <AboutCard
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    details={item.details}
                />
            ))}
        </AboutUsSection>
    );
}

export default AboutUs;
