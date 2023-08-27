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
	infos: string;
	description: string;
	to: string;
	destaque: boolean;
};

const Restaurant = ({
	title,
	image,
	infos,
	description,
	review,
	to,
	destaque,
}: Props) => (
	<Card>
		<Image src={image} />
		<div className="tagContainer">
			{destaque && (
				<>
					<Tag type="tag">{'Destaque da Semana'}</Tag>
				</>
			)}

			<Tag type="tag">{infos}</Tag>
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
			<Tag type="button" toLink={to}>
				{'Saiba mais'}
			</Tag>
		</SecondContainer>
	</Card>
);

export default Restaurant;
