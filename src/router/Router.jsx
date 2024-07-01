import { createBrowserRouter } from 'react-router-dom';
import App from '../components/pages/Home';
import Error404 from '../components/pages/Error404';
import Home from '../components/pages/Home';
import Products from '../components/pages/Products';
import AppTemplate from '../components/templates/AppTemplate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppTemplate />,
    errorElement:<Error404/>,
    children: [
        {   index: true,
            element: <Home />,
        },
     {   path: "/productos",
        element: <Products/>,
    }
    ]
  }
]);

export default router;
