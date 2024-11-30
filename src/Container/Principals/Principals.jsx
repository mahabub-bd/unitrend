import { HeadingPrimary, PrincipalCard } from '../../Components';
import { data } from '../../Constants';
import { Wrapper } from '../../GlobalStyle';
import { PrincipalSection } from './Princiapl.Styles';

function Principals() {
    return (
        <PrincipalSection>
            <HeadingPrimary center title="Our Partners" />
            <Wrapper>
                {data.principals.map((item) => (
                    <PrincipalCard
                        key={item.title}
                        image={item.imgUrl}
                        title={item.title}
                        address={item.address}
                    />
                ))}
            </Wrapper>
        </PrincipalSection>
    );
}

export default Principals;
