import { jwtDecode } from 'jwt-decode';

export default function Profile() {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;

  return (
    <div>
      <div>Profile. User id is: {userId}</div>
    </div>
  );
}
