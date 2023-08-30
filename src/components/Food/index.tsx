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
	const getDescription = (description: string) =>
		description.length > 132 && description.slice(0, 129) + '...';

	return (
		<S.Card>
			<S.Image src={image} alt={title} />
			<S.DescriptionContainer>
				<S.Title>{title}</S.Title>
				<S.Description>{getDescription(description)}</S.Description>
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

const descricao =
	'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!';

console.log(descricao.length);

const descricao2 =
	'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!';

console.log(descricao2.length);

export default Food;
