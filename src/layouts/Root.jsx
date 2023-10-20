import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

export const Root = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};
