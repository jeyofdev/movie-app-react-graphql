import { auth } from '@services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesEnum } from '../../../types/enums';
import { RequireAuthPropsType } from '../../../types/types/props';

const RequireAuth = ({ children }: RequireAuthPropsType) => {
	const [user] = useAuthState(auth);
	const location = useLocation();

	if (!user) {
		return <Navigate to={RoutesEnum.ROOT} state={{ from: location }} replace />;
	}

	return <>{children}</>;
};

export default RequireAuth;
