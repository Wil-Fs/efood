import { CircleLoader } from 'react-spinners';
import { Cores } from '../../styles';
import { SpinnerContainer } from './styeles';

export const Spinner = () => (
	<SpinnerContainer>
		<CircleLoader className="spinner" color={Cores.bgColorFooter} />
	</SpinnerContainer>
);

export default Spinner;
