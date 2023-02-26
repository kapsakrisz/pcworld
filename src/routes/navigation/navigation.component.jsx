import {Outlet,Link} from 'react-router-dom';
import {Fragment} from 'react'
import {ReactComponent as PcwLogo} from '../../assets/crown.svg'
const Navigation = ()=> {
    return (
        <Fragment>
            <div className='navigation'>
            <Link className='logo-container' to='/'>
                <PcwLogo className='logo'/>

            </Link>
                <div className='nav-links-container'>
                    <Link classname='nav-link' to='/shop'>
                    Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation