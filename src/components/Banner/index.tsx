import * as S from './styles';

type Props = {
	type?: string;
	title: string;
	banner: string;
};

const Banner = ({ banner, type, title }: Props) => (
	<S.Banner style={{ backgroundImage: `url(${banner})` }}>
		<S.Blur>
			<div className={'Container'}>
				<S.CategoryTitle>{type}</S.CategoryTitle>
				<S.RestaurantTitle>{title}</S.RestaurantTitle>
			</div>
		</S.Blur>
	</S.Banner>
);

export default Banner;
