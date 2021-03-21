import { Link } from 'react-router-dom'

import '../../layout.scss'

const Layout = props => {
    return(
        <>
            <header>
                <div className='banner'>
                    <Link to='/'><div className='logo'>BLERG!</div></Link>{' '}
                    <div>
                        <div>
                            <Link to='#'>Log in</Link>{' '}
                            <Link to='#'>Sign up</Link> 
                        </div>
                        <form>
                            <input type='text' placeholder='Search...' />
                        </form>
                    </div>
                </div>
                <nav>
                    <Link to='#'>About</Link>{' '}
                    <Link to='#'>Trending</Link>{' '}
                    <Link to='#'>Topics</Link>{' '}
                    <Link to='#'>Random Blerg!</Link>
                </nav>
            </header>
            <div>{props.children}</div>
        </>
    )
}

export default Layout