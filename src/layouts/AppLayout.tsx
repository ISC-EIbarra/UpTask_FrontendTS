import { Link, Navigate, Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import NavMenu from '@/components/NavMenu';
import { useAuth } from '@/hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

export default function AppLayout() {
  const { data, isError, isLoading } = useAuth();

  if (isLoading) {
    return 'Cargando...';
  }
  if (isError) {
    return <Navigate to="/auth/login" />;
  }

  if (data)
    return (
      <>
        <header className="bg-gray-800">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-48">
              <Link to={'/'}>
                <Logo />
              </Link>
            </div>
            <NavMenu name={data.name} />
          </div>
        </header>
        <section className="max-w-screen-xl mx-auto mt-10 p-4">
          <Outlet />
        </section>
        <footer className="py-4">
          <p className="font-normal text-center">
            © Todos los derechos reservados {new Date().getFullYear()}
          </p>
        </footer>
        <ToastContainer
          position="bottom-right"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          toastClassName="custom-toast"
        />
      </>
    );
}
