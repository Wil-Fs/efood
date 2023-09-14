import { useDispatch } from 'react-redux';
import { Button, Tags } from './style';
import { openCart } from '../../store/reducers/cart';

export type Props = {
	children: string[];
	type: 'button' | 'tag' | 'addCart' | 'openCart';
	toLink?: string;
	SelectedFood?: () => void;
	onClick?: () => void | unknown;
};

const Tag = ({ children, type, toLink, SelectedFood }: Props) => {
	const dispatch = useDispatch();

	if (type === 'button') {
		return (
			<Button type="button" to={`${toLink}`}>
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

	if (type === 'openCart') {
		return (
			<Button onClick={() => dispatch(openCart())} to={''}>
				{children}
			</Button>
		);
	}

	return <Tags>{children}</Tags>;
};

export default Tag;
