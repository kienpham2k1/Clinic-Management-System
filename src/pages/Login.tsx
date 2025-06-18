// src/features/auth/LoginForm.tsx
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { logout } from '../features/auth/authSlice';
import { AppDispatch, RootState } from '../store';
import { loading } from '../features/profile/profileSlice';
import { login } from '../services/auth/LoginService';
import { fetchProfile } from '../services/user/UserService';

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);
    const profile = useSelector((state: RootState) => state.profile);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({ username, password }));
        dispatch((loading()))
        dispatch(fetchProfile())
    };

    const handleLogout = () => {
        dispatch(logout());
        dispatch((loading()))
    };

    return (
        <div>
            {auth.isAuthenticated ? (
                <div>
                    {JSON.stringify(profile.loading).toString()}
                    <h3>Xin chào, {profile.userProfile?.firstName}</h3>
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
                    <button onClick={handleLogin}  >
                        {profile.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </button>
                    {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
                </div>
            )}
        </div>
    );
}
