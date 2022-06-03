import { Fragment, } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';



const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    Home
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;