import { Button, Tags } from './style';

export type Props = {
	children: string[];
	type: 'button' | 'tag' | 'addCart' | 'openCart';
	toLink?: string;
	SelectedFood?: () => void;
	onClick?: () => void | unknown;
};

const Tag = ({ children, type, toLink, SelectedFood, onClick }: Props) => {
	if (type === 'button') {
		return (
			<Button type="button" to={`${toLink}`} onClick={onClick}>
				{children}
			</Button>
		);
	}

	if (type === 'addCart') {
		return (
			<Button type="button" to={''} onClick={() => SelectedFood?.()}>
				{children}
			</Button>
		);
	}

	return <Tags>{children}</Tags>;
};

export default Tag;
