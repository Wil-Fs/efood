class RestaurantClass {
	id: number;
	title: string;
	review: number;
	image: string;
	infos: string[];
	description: string;
	to: string;

	constructor(
		id: number,
		title: string,
		review: number,
		image: string,
		infos: string[],
		description: string,
		to: string
	) {
		this.id = id;
		this.title = title;
		this.review = review;
		this.image = image;
		this.infos = infos;
		this.description = description;
		this.to = to;
	}
}

export default RestaurantClass;
