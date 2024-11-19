import { useNavigate } from 'react-router-dom';

const fakeJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsIm5hbWUiOiJTdW4gUmEifQ.mockSignature';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Sign Up</div>
      <button
        onClick={(e) => {
          localStorage.setItem('jwt', fakeJWT);
          navigate('/app');
        }}
        className="rounded-lg bg-red-100 px-2 py-1"
      >
        Fake Sign Up Button
      </button>
    </div>
  );
}
