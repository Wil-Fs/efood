import Tag from '../Tag';
import * as S from './styles';

type Props = {
	id: number;
	image: string;
	title: string;
	description: string;
	toLink: string;
	SelectedFood: () => void;
};

const Food = ({ image, title, description, toLink, SelectedFood }: Props) => {
	const getDescription = (description: string) =>
		description.length > 132 && description.slice(0, 120) + '...';

	return (
		<S.Card>
			<S.Image src={image} alt={title} />
			<S.DescriptionContainer>
				<S.Title>{title}</S.Title>
				<S.Description>{getDescription(description)}</S.Description>
				<Tag
					type="addCart"
					toLink={toLink}
					SelectedFood={() => SelectedFood()}
				>
					{['Adicionar ao carrinho']}
				</Tag>
			</S.DescriptionContainer>
		</S.Card>
	);
};

export default Food;
