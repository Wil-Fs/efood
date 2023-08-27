import Tag from '../Tag';
import * as S from './styles';

type Props = {
	image: string;
	title: string;
	description: string;
	toLink: string;
	onClick: () => void;
};

const Food = ({ image, title, description, toLink, onClick }: Props) => {
	return (
		<S.Card>
			<S.Image src={image} alt={title} />
			<S.DescriptionContainer>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
				<Tag
					type="addCarrinho"
					toLink={toLink}
					onClick={() => onClick()}
				>
					Adicionar ao carrinho
				</Tag>
			</S.DescriptionContainer>
		</S.Card>
	);
};

export default Food;
