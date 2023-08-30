import Tag from '../Tag';
import * as S from './styles';

type Props = {
	id: number;
	image: string;
	title: string;
	description: string;
	toLink: string;
	SelectedFood: (id: number) => number | void;
};

const Food = ({
	id,
	image,
	title,
	description,
	toLink,
	SelectedFood,
}: Props) => {
	return (
		<S.Card>
			<S.Image src={image} alt={title} />
			<S.DescriptionContainer>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
				<Tag
					type="addCart"
					toLink={toLink}
					SelectedFood={() => SelectedFood(id)}
				>
					{['Adicionar ao carrinho']}
				</Tag>
			</S.DescriptionContainer>
		</S.Card>
	);
};

export default Food;
