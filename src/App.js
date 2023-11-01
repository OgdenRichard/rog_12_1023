import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Root } from './layouts/Root';
import './style/App.css';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Community from './pages/Community';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="profile/18" element={<Profile />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="community" element={<Community />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
