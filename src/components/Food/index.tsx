import Tag from '../Tag';
import * as S from './styles';

type Props = {
	image: string;
	title: string;
	description: string;
	toLink: string;
};

const Food = ({ image, title, description, toLink }: Props) => (
	<S.Card>
		<S.Image src={image} alt={title} />
		<S.DescriptionContainer>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
			<Tag type="button" toLink={toLink}>
				Adicionar ao carrinho
			</Tag>
		</S.DescriptionContainer>
	</S.Card>
);

export default Food;
