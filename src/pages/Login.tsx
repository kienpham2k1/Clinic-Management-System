// src/features/auth/LoginForm.tsx
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { login, logout } from '../features/auth/authSlice';
import { AppDispatch, RootState } from '../store';
import { fetchProfile, loading } from '../features/profile/profileSlice';

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);
    const profile = useSelector((state: RootState) => state.profile);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({
            accessToken: "fake_token",
            refreshToken: "fakeToken"
        }));
        dispatch((loading()))
        dispatch(fetchProfile({
            id: "1",
            profileImage: null,
            firstName: "Kien",
            lastName: "Pham",
            email: "kienpt32@mail.com",
            phoneNumber: "123",
        }))
    };

    const handleLogout = () => {
        dispatch(logout());
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
                    {/* {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>} */}
                </div>
            )}
        </div>
    );
}
