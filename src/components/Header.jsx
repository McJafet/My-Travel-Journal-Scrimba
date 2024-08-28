import '../styles/Header.css'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
            <h2>My Travel Journal</h2>
        </header>
    )
}