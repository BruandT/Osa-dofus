import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

function Blank() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Blank;