class RestaurantClass {
	id: number;
	title: string;
	review: number;
	image: string;
	infos: string[];
	description: string;

	constructor(
		id: number,
		title: string,
		review: number,
		image: string,
		infos: string[],
		description: string
	) {
		this.id = id;
		this.title = title;
		this.review = review;
		this.image = image;
		this.infos = infos;
		this.description = description;
	}
}

export default RestaurantClass;
