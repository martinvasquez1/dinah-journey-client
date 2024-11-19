import { Outlet } from 'react-router-dom';

import AppNavbar from './AppNavbar';

export default function AppLayout({}) {
  return (
    <div className="min-h-screen">
      <AppNavbar />
      <Outlet />
    </div>
  );
}
