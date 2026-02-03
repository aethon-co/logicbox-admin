import { useNavigate } from 'react-router-dom';
import '../../App.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogicboxClick = () => {
        const token = localStorage.getItem('token_logicbox');
        if (token) {
            navigate('/home-logicbox');
        } else {
            navigate('/login-logixbox');
        }
    };

    const handleTradetalkClick = () => {
        const token = localStorage.getItem('token_tradetalk');
        if (token) {
            navigate('/home-tradetalk');
        } else {
            navigate('/login-tradetalk');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '2rem' }}>
            <h1>Welcome to Admin Panel</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <button onClick={handleLogicboxClick} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                    Logicbox
                </button>
                <button onClick={handleTradetalkClick} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                    Tradetalk
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
