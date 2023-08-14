import { Button, Tags } from './style';

export type Props = {
	children: string;
	type: 'button' | 'tag';
	toLink?: string;
};

const Tag = ({ children, type, toLink }: Props) =>
	type === 'button' ? (
		<Button type="button" to={`${toLink}`}>
			{children}
		</Button>
	) : (
		<Tags>{children}</Tags>
	);

export default Tag;
