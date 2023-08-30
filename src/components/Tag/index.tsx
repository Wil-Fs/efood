import { Button, Tags } from './style';

export type Props = {
	children: string[];
	type: 'button' | 'tag' | 'addCart';
	toLink?: string;
	SelectedFood?: () => void;
};

const Tag = ({ children, type, toLink, SelectedFood }: Props) => {
	if (type === 'button') {
		return (
			<Button type="button" to={`${toLink}`}>
				{children}
			</Button>
		);
	}

	if (type === 'addCart') {
		return (
			<Button
				type="button"
				to={`${toLink}`}
				onClick={() => SelectedFood?.()}
			>
				{children}
			</Button>
		);
	}

	return <Tags>{children}</Tags>;
};

export default Tag;
