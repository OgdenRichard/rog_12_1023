import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { ErrorPage } from './components/pages/ErrorPage';
import { Root } from './components/layouts/Root';
import './style/App.css';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Community from './components/pages/Community';
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
