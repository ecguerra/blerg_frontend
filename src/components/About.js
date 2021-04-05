import { Link } from 'react-router-dom'
import { 
    GrFacebook,
    GrInstagram,
    GrTwitter,
    GrYoutube,
    GrSnapchat
} from 'react-icons/gr'


import '../style/content.scss'

const About = () => {
    return (
        <div className='content-container'>
            <div className='content'>
                <h1>What is a Blerg?!?</h1>
                <h2>Posted by <Link to='#' className='author-tag'>Team Blerg!</Link></h2>
                <p>Blerg! is the new blogging platform for people for whom blogging has just never "stuck."
                Maybe you've tried to blog with good intention, but then abandon your site after a few short weeks. 
                For some of us, blogging just doesn't come naturally, and that's okay!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius tempor velit vel ultricies. Maecenas aliquam et nunc id volutpat. Vivamus dictum quis sem vel ornare. Integer et fermentum ipsum, ac eleifend lectus. In ac euismod nunc. Phasellus pretium mi a dolor bibendum, nec ultricies sem faucibus. Maecenas ornare, elit a euismod congue, neque tortor malesuada orci, sed imperdiet nulla felis sit amet nisl. Pellentesque bibendum eleifend elit at pretium. Duis vulputate erat quis nisi tempor pellentesque. Nunc eleifend, orci vel pellentesque pretium, massa odio elementum odio, nec eleifend nisi dui sed justo. In hac habitasse platea dictumst. Aliquam erat volutpat.</p>
                <p>Aliquam sodales consequat venenatis. In vehicula, tortor ac sodales ullamcorper, quam eros tincidunt felis, eu accumsan ante nisl a sapien. Nunc auctor ultricies enim non laoreet. Vivamus et lorem tempor, hendrerit sem ut, rutrum ligula. Nam vitae sodales velit. Aliquam at erat a lectus pharetra mollis at id neque. Donec felis dui, aliquet sed egestas quis, tincidunt blandit dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce arcu massa, fermentum eget vestibulum at, egestas vitae ipsum. Fusce semper, massa et porttitor tempor, velit erat facilisis lacus, id suscipit quam est venenatis felis. Donec sed eros porttitor, dignissim tortor ac, imperdiet mi. Nullam hendrerit et nibh id aliquet. Pellentesque sit amet magna sit amet est pretium feugiat vitae eget quam. Donec ut turpis nec lectus volutpat feugiat et vel dolor. Vivamus sodales diam quis enim mattis, quis viverra quam aliquet. Proin justo dui, malesuada ac sollicitudin et, placerat in metus.</p>
                    <p>
                        Now that you know all about us, why not {' '}
                        <Link to='#' className='cta'>start your own Blerg!</Link>
                    </p>
                    <p>
                        Or if you're looking for some more ideas, {' '}
                        <Link to='#' className='cta'>check out more of the Blerg Blerg!</Link>
                    </p>
            </div>
            <div className='sidebar'>
                <div className='form-container'>
                    <h2>Sign up for news from Blerg!</h2>
                    <form>
                        <input type='text' placeholder='Your Name' />
                        <input type='email' placeholder='Your Email' />
                        <input type='submit' value='Subscribe' />
                    </form>
                </div>
                <div className='social'>
                    <h2>Follow Blerg! on any of these fine sites</h2>
                    <div className='social-container'>
                        <GrFacebook />
                        <GrInstagram />
                        <GrTwitter />
                        <GrYoutube />
                        <GrSnapchat />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About