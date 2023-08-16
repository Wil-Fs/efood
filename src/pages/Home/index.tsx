import RestaurantClass from '../../models/Restaurant/RestaurantClass';
import RestaurantList from '../../components/RestaurantList';

import { Background } from './styles';

import sushi from '../../assets/images/sushi.png';
import italiana from '../../assets/images/espaguete.png';

const restaurants: RestaurantClass[] = [
	{
		id: 1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: sushi,
		infos: ['Destaque da semana', 'Japonesa'],
		review: 4.9,
		to: 'restaurant',
	},
	{
		id: 2,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: italiana,
		infos: ['Italiana'],
		review: 4.9,
		to: 'restaurant',
	},
	{
		id: 3,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: sushi,
		infos: ['Italiana'],
		review: 4.9,
		to: 'restaurant',
	},
	{
		id: 4,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: sushi,
		infos: ['Italiana'],
		review: 4.9,
		to: 'restaurant',
	},
	{
		id: 5,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: sushi,
		infos: ['Italiana'],
		review: 4.9,
		to: 'restaurant',
	},
	{
		id: 6,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		title: 'Hioki Sushi',
		image: sushi,
		infos: ['Italiana'],
		review: 4.9,
		to: 'restaurant',
	},
];

const Home = () => (
	<Background>
		<RestaurantList restaurants={restaurants} />
	</Background>
);

export default Home;
