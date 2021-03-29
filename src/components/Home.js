import { Link } from 'react-router-dom'

import '../home.scss'

const Home = () => {
    return(
        <div className='home'>
            <div className='landing-container'>
                <div className='landing-text'>
                    <h1>Welcome to Blerg!</h1>
                    <p>Hate blogging? Us too. Come on in and join us</p>
                    <div className='btn-container'>
                        <Link to='#' className='btn-register'>Start your Blerg!</Link>
                    </div>
                </div>
                <div className='landing-img'></div>
            </div>
            <div className='article-container'>
                <div className='article'>
                    <div>
                        <h2>What is a Blerg!?</h2>
                        <p>Blerg! is the new blogging platform for people for whom blogging has just never "stuck."
                        Maybe you've tried to blog with good intention, but then abandon your site after a few short weeks.
                        For some of us, blogging just doesn't come naturally...
                        </p>
                    </div>
                    <Link to='#' className='btn-continue'>Keep Reading</Link>
                </div>
                <div className='article'>
                    <div>
                        <h2>Blerging Tips</h2>
                        <p>We get it, sometimes you just don't feel like blogging. What should you talk about, how frequently should you post, is anyone reading this?
                        While we can't write your Blerg! for you, we can help you break through that self-doubt and writer's block with these tips...
                        </p>
                    </div>
                    <Link to='#' className='btn-continue'>Keep Reading</Link>
                </div>
                <div className='article'>
                    <div>
                        <h2>Blergspiration</h2>
                        <p>Our weekly roundup of Blerging prompts, images, and ideas 
                        </p>
                    </div>
                    <Link to='#' className='btn-continue'>Keep Reading</Link>
                </div>
            </div>
        </div>
    )
}

export default Home