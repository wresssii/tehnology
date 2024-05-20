import './Logo.css';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.jpg'

function Logo() {
  return (
    <Link to="/" className='Logo'>
      <img src={logo} alt="" />
    </Link>
  );
}

export default Logo;