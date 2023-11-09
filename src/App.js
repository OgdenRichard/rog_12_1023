import React from 'react';
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
import { CONNECTED_USERID, USE_MOCK } from './settings/apiSettings';

export const ApiContext = React.createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to={'profile'} />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="settings" element={<Settings />} />
      <Route path="community" element={<Community />} />
    </Route>,
  ),
);

function App() {
  return (
    <ApiContext.Provider
      value={{ userId: CONNECTED_USERID, useMock: USE_MOCK }}
    >
      <RouterProvider router={router} />
    </ApiContext.Provider>
  );
}

export default App;
