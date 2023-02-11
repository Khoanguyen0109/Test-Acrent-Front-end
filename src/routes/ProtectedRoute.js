import { Navigate, Outlet } from 'react-router-dom';

import Layout from 'layouts/Layout';

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const user = true;
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
