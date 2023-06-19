import { auth } from '@services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../../types/enums';
import { RequireAuthPropsType } from '../../../types/types/props';

const RequireAuth = ({ children }: RequireAuthPropsType) => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	if (!user) {
		navigate(RoutesEnum.ROOT);
	}

	return <>{children}</>;
};

export default RequireAuth;
