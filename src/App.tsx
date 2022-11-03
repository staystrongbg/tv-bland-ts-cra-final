import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleMovie from './components/SingleMovie/SingleMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shows/:id',
        element: <SingleMovie />,
      },
    ],
  },
]);
const App: React.FC = () => {
  return (
    <>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
