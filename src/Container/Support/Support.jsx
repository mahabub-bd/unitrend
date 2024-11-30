import { HeadingPrimary, SupportCard } from '../../Components';
import { data } from '../../Constants';
import { SupportSection } from './Support.Styles';

function Support() {
    return (
        <SupportSection>
            <HeadingPrimary title="Service & Support" />
            {data.support.map((support) => (
                <SupportCard key={support.id} title={support.title} details={support.details} />
            ))}
        </SupportSection>
    );
}

export default Support;
