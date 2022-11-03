import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
