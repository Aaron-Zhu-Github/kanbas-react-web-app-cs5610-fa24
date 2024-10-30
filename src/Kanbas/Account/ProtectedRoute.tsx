import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }: { children: any, requiredRole?: string }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  } 
  if(requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
  return children;
}