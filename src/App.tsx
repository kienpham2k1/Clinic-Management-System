// src/features/auth/LoginForm.tsx
import { useDispatch, useSelector } from 'react-redux';
 
import { useState } from 'react';
import { login, logout } from './features/auth/authSlice';
import { AppDispatch, RootState } from './store';

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {auth.isAuthenticated ? (
        <div>
          <h3>Xin chào, {auth.user?.firstName}</h3>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <h3>Đăng nhập</h3>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={auth.loading}>
            {auth.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
          {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
        </div>
      )}
    </div>
  );
}
