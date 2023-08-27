import { Button, Tags } from './style';

export type Props = {
	children: string;
	type: 'button' | 'tag' | 'addCarrinho';
	toLink?: string;
	onClick?: () => void;
};

const Tag = ({ children, type, toLink, onClick }: Props) => {
	if (type === 'button') {
		return (
			<Button type="button" to={`${toLink}`}>
				{children}
			</Button>
		);
	}

	if (type === 'addCarrinho') {
		return (
			<Button type="button" to={`${toLink}`} onClick={() => onClick?.()}>
				{children}
			</Button>
		);
	}

	return <Tags>{children}</Tags>;
};

export default Tag;
