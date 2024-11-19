import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import NotFound from './pages/NotFound.jsx';

import AuthRoute from './components/AuthRoute.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/app"
          element={
            <AuthRoute>
              <AppLayout />
            </AuthRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="settings/" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
