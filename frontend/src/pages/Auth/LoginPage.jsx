import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const { login, isAuthenticated } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Connexion</button>
                </form>
                <p>Vous n'avez pas de compte ? <Link to="/register">Inscription</Link></p>
                <p>Mot de passe oublié ? <Link to="/forgot-password">Réinitialiser</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;