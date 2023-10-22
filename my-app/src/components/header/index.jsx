import s from './style.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={s.container}>
            <nav className={s.navbar}>
                <Link className={s.menu} to='/'>Главная страница</Link>
                <Link className={s.menu} to='/chat'>Чат</Link>
                <Link className={s.menu} to='/test'>Команда NBA</Link>
            </nav>
        </div>
    )
}

export default Header