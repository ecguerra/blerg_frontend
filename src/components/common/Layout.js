import { Link } from 'react-router-dom'

import '../../style/layout.scss'

const Layout = props => {
    return(
        <>
            <header>
                <div className='banner'>
                    <Link to='/'><div className='logo'>Blerg!</div></Link>{' '}
                    <div>
                        <div className='login-links'>
                            <Link to='#'>Log in</Link>
                            {' '}/{' '}
                            <Link to='#'>Sign up</Link> 
                        </div>
                        <form>
                            <input type='text' placeholder='Search...' />
                        </form>
                    </div>
                </div>
                <nav>
                    <Link to='/about'>About</Link>{' '}
                    <Link to='#'>Trending</Link>{' '}
                    <Link to='#'>Topics</Link>{' '}
                    <Link to='#'>The Blerg Blerg!</Link>
                </nav>
            </header>
            <div>{props.children}</div>
        </>
    )
}

export default Layout