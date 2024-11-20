import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const fakeJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsIm5hbWUiOiJTdW4gUmEifQ.mockSignature';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('jwt', fakeJWT); // Simula el almacenamiento del JWT
      navigate('/app'); // Redirige a la aplicación principal
    } else {
      alert('Por favor, ingresa tu correo y contraseña.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6 w-full max-w-md">
        <div className="text-2xl font-bold text-gray-800">Welcome!</div>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Campo de correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          {/* Campo de contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        {/* Enlace para crear cuenta */}
        <div className="text-sm text-gray-500">
          ¿No tiene una cuenta?{' '}
          <Link to="/sign-up" className="text-indigo-500 hover:underline">
            Cree una.
          </Link>
        </div>
      </div>
    </div>
  );
}