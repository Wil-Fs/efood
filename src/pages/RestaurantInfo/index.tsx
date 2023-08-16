import Banner from '../../components/Banner';
import HeroInfos from '../../components/HeroInfos';
import FoodClass from '../../models/Food/FoodClass';

import pizza from '../../assets/images/pizza.png';
import FoodList from '../../components/FoodList';
import Footer from '../../components/Footer';

const foods: FoodClass[] = [
	{
		id: 1,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
	{
		id: 2,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
	{
		id: 3,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
	{
		id: 4,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
	{
		id: 5,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
	{
		id: 6,
		image: pizza,
		title: 'Pizza Marguerita',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nisi cumque quod quis quia quam eveniet, voluptatem unde. Ratione esse cum explicabo quaerat quidem facilis deserunt eligendi itaque sequi.',
		toDescription: '#',
	},
];

const RestaurantInfo = () => (
	<>
		<HeroInfos toLinkHome="/" toLinkCar="carrinho" />
		<Banner />
		<FoodList foods={foods} />
		<Footer />
	</>
);

export default RestaurantInfo;
