import Food from '../Food';
import * as S from './styles';

import FoodClass from '../../models/Food/FoodClass';

type Props = {
	foods: FoodClass[];
};

const FoodList = ({ foods }: Props) => (
	<S.Background>
		<div className="Container">
			<S.FoodList>
				{foods.map(
					({ id, image, title, description, toDescription }) => (
						<Food
							key={id}
							image={image}
							title={title}
							description={description}
							toLink={toDescription}
						/>
					)
				)}
			</S.FoodList>
		</div>
	</S.Background>
);

export default FoodList;
