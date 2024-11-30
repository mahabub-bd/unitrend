import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import { Paragraph } from './About.Styles';

function AboutCard({ title, subtitle, details }) {
    return (
        <>
            <HeadingSecondary title={title} />
            <Paragraph>{subtitle}</Paragraph>
            <Paragraph>{details}</Paragraph>
        </>
    );
}

export default AboutCard;
