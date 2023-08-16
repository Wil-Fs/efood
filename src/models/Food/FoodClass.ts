class Food {
	id: number;
	image: string;
	title: string;
	description: string;
	toDescription: string;

	constructor(
		id: number,
		image: string,
		title: string,
		description: string,
		toDescription: string
	) {
		this.id = id;
		this.image = image;
		this.title = title;
		this.description = description;
		this.toDescription = toDescription;
	}
}

export default Food;
