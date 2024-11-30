import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import { Paragraph, SupportCardComponents } from './Support.Styles';

function SupportCard({ title, details }) {
    return (
        <SupportCardComponents>
            <HeadingSecondary title={title} />
            <Paragraph>{details}</Paragraph>
        </SupportCardComponents>
    );
}

export default SupportCard;
