import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Root } from './layouts/Root';
import './style/App.css';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Community from './pages/Community';
import { CONNECTED_USERID } from './settings/apiSettings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to={'profile'} />} />
      <Route path="profile" element={<Profile userId={CONNECTED_USERID} />} />
      <Route path="/home" element={<Home />} />
      <Route path="settings" element={<Settings />} />
      <Route path="community" element={<Community />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
