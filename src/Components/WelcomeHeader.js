import './Styles/WelcomeHeader.css';
import { MdWavingHand } from 'react-icons/md';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';

function HelloMessage() {
    return (
        <header>
            <MdWavingHand  className='wavingHand'/>
                <div className='welcome'>
                    <h2>Hi there! I'm</h2>
                    <h1>Ryan Maddock</h1>
                    <h3>A Passionate <span>Front end Developer</span>, <br/>based in <span>Southport UK</span></h3>
                    <span className='socialLinks'>Connect with me: <a href='#'><FaGithubSquare className='socialIcon'/>Github</a><a href='#'><FaLinkedin className='socialIcon'/>Linkedin</a></span>
                </div>
        </header>
    )
}

export default HelloMessage;