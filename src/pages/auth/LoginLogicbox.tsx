import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginLogixbox } from '../../api/auth';

const LoginLogixbox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: loginLogixbox,
        onSuccess: (data: any) => {
            console.log('Success:', data);
            if (data?.token) {
                localStorage.setItem('token_logicbox', data.token);
            }
            navigate('/home-logicbox');
        },
        onError: (error) => {
            console.error('Error:', error);
            alert('Login failed');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ username, password });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginLogixbox;
