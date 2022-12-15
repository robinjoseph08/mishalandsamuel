import './styles/index.scss';
import 'react-image-lightbox/style.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import Home from './components/Home';
import Story from './components/Story';
import Photos from './components/Photos';
import Who from './components/Who';
import Where from './components/Where';
import Registry from './components/Registry';
// import RSVP from './components/RSVP';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <Home />,
  }, {
    path: '/story',
    element: <Story />,
  }, {
    path: '/photos',
    element: <Photos />,
  }, {
    path: '/who',
    element: <Who />,
  }, {
    path: '/where',
    element: <Where />,
  }, {
    path: '/registry',
    element: <Registry />,
  // }, {
  //   path: '/rsvp',
  //   element: <RSVP />,
  }],
}]);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <RouterProvider router={router} />
);
