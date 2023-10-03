import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Time from './Time';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'time',
        element: <Time />,
        loader: () => fetch('/api/getTime')
      },
      {
        path: '*',
        element: <ErrorPage status={404} message={'Page not found.'} />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
