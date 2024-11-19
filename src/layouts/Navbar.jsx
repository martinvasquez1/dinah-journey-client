import { Link } from 'react-router-dom';

import Logo from './../components/Logo';

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Sign in', to: '/sign-in' },
  { text: 'Sign up', to: '/sign-up' },
];

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 bg-slate-100 p-4">
      <Logo />
      <div className="hidden flex-none md:block">
        <ul className="flex items-center gap-4">
          {links.map((link) => (
            <li key={link.text}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">Hamburger Button</div>
    </div>
  );
}
