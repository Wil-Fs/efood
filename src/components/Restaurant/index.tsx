import Tag from '../Tag';

import {
	Image,
	Card,
	Title,
	Review,
	Description,
	SecondContainer,
} from './styles';

import star from '../../assets/images/estrela.png';

export type Props = {
	title: string;
	review: number;
	image: string;
	infos: string[];
	description: string;
};

const Restaurant = ({ title, image, infos, description, review }: Props) => (
	<Card>
		<Image image={image} />
		<div className="tagContainer">
			{infos.map((tags) => (
				<Tag type="tag" key={tags}>
					{tags}
				</Tag>
			))}
		</div>
		<SecondContainer>
			<div className={'textContainer'}>
				<Title>{title}</Title>
				<Review>
					{review}
					<img className="star" src={star} />
				</Review>
			</div>
			<Description>{description}</Description>
			<Tag type="button" toLink={'/'}>
				{'Saiba mais'}
			</Tag>
		</SecondContainer>
	</Card>
);

export default Restaurant;
