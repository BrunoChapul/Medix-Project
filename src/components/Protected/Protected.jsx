import { Outlet, Navigate } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";

function Protected() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default Protected;
