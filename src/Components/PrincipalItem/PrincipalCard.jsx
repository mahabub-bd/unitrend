import { PrincipalCardWrapper, PrincipalImage, PrincipalTitle } from './PrincipalCard.Styles';

function PrincipalCard({ image, title, address }) {
    return (
        <PrincipalCardWrapper href={address}>
            <PrincipalImage src={image} alt={title} />
            <PrincipalTitle>{title}</PrincipalTitle>
        </PrincipalCardWrapper>
    );
}

export default PrincipalCard;
