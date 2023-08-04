import Tag from '../Tag';

import { Image, Card, Title, Review, Description } from './styles';

export type Props = {
	title: string;
	review: number;
	image: string;
	infos: string[];
	description: string;
};

const Restaurant = ({ title, image, infos, description, review }: Props) => (
	<Card>
		<Image image={image}>
			{infos.map((tag) => (
				<Tag type="tag" key={tag}>
					{infos}
				</Tag>
			))}
		</Image>
		<div>
			<div>
				<Title>{title}</Title>
				<Review>{review}</Review>
			</div>
			<Description>{description}</Description>
		</div>
		<Tag type="button">{['Saiba mais']}</Tag>
	</Card>
);

export default Restaurant;
