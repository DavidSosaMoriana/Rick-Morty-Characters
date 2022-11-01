import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/index';
import { LoginPage } from './pages/login';
import { RouterLayout } from './shared/RouterLayout';

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
