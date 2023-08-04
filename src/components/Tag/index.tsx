import { Button } from './style';

type Props = {
	children: string[];
	type: 'button' | 'tag';
};

const Tag = ({ children, type }: Props) => {
	if (type === 'button') {
		return (
			<>
				<Button type="button" to={''}>
					{children}
				</Button>
				;
			</>
		);
	}

	return <Tag type="tag">{children}</Tag>;
};

export default Tag;
