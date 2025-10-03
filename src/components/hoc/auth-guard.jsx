import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const hasMounted = useHasMounted();

    useEffect(() => {
      if (!hasMounted) return;

      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
      } else {
        setIsAuthenticated(true);
      }
    }, [hasMounted, router]);

    if (!hasMounted || isAuthenticated === null) {
      return (
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="animate-spin" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
