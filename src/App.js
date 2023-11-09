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

export const UserContext = React.createContext();
export const DataContext = React.createContext();

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
  return (
    <UserContext.Provider value={CONNECTED_USERID}>
      <DataContext.Provider value={USE_MOCK}>
        <RouterProvider router={router} />
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
