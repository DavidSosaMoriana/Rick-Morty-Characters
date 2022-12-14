import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const RouterLayout: React.FC<{}> = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);
