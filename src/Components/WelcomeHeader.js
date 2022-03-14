import './Styles/WelcomeHeader.scss';
import { MdWavingHand } from 'react-icons/md';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';

function HelloMessage() {
    return (
        <header>

        <div className='animatedSquares'>
            {[...Array(15)].map((el,index) => (<span key={index * Math.random()}></span>))}
        </div>
            <MdWavingHand  className='wavingHand'/>
                <div className='welcome'>
                    <h2>Hi there! I'm</h2>
                    <h1>Ryan Maddock</h1>
                    <h3>A Passionate <span>Front end Developer</span>, <br/>based in <span>Southport UK</span></h3>
                    <span className='socialLinks'>Connect with me: <a href='https://github.com/Ryan-Maddock-96'><FaGithubSquare className='socialIcon'/>Github</a><a href='https://www.linkedin.com/in/ryanmaddock96/'><FaLinkedin className='socialIcon'/>Linkedin</a></span>
                </div>
        </header>
    )
}

export default HelloMessage;