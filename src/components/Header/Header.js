import Logo from '../imgs/logo-cs.png'
import './Header.css'
import { FaLinkedin, FaGithub} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='cab'>
      <img src={Logo} alt="Logo" />

      <nav className='nav'>
        <ul>
          <li><a href="https://www.linkedin.com/in/claudio-ferreira-da-silva-495b621b6/" target='_blank' rel='noreferrer'> <FaLinkedin size={35} /></a></li>
          <li><a href="https://github.com/claudiofsilva95" target='_blank' rel='noreferrer'> <FaGithub size={35} /></a></li>
        </ul>
      </nav>
    </header>
  )
}