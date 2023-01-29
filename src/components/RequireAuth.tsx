import { useLocation, Navigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useData();
  let location = useLocation();

  if (!auth.isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}
