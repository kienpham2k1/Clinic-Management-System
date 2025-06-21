// src/features/auth/LoginForm.tsx
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useRef, useState } from 'react';
import { logout } from '../features/auth/authSlice';
import { AppDispatch, RootState } from '../store';
import { login } from '../services/auth/LoginService';
import { fetchProfile } from '../services/user/UserService';

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);
    const profile = useSelector((state: RootState) => state.profile);
    const setting = useSelector((state: RootState) => state.setting);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({ username, password }));
        dispatch(fetchProfile())
    };

    const handleLogout = () => {
        dispatch(logout());
        // dispatch(loading())
    };


    const ref = useRef<HTMLDivElement>(null);
    const enableRTL = setting.setting.themeSchemeDirection.enableRTL
    useEffect(() => {
        console.log(enableRTL)
        const el = ref.current;
        if (!el) return;

        if (enableRTL) {
            el.style.backgroundColor = 'red';
            el.classList.add('rtl-enabled');
        } else {
            el.style.removeProperty('background-color');
            el.classList.remove('rtl-enabled');
        }
    }, [enableRTL])
    return (
        <div>

            <div ref={ref}>Use Ref</div>
            <div> {"profile loading " + JSON.stringify(profile.loading).toString()}</div>
            <div>  {"auth loading " + JSON.stringify(auth.loading).toString()}</div>

            <div> Setting value: {JSON.stringify(enableRTL)}</div>
            {auth.isAuthenticated ? (
                <div>
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
                        {auth.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </button>
                    {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
                </div>
            )}
        </div>
    );
}
