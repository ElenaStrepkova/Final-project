import s from './style.module.css'
import { useState } from 'react'
import { useLocalStorage } from '../hook/useLocalStorage'

const Home = () => {
    const [user, setUser] = useLocalStorage('USER')
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    return (
        <div className={s.main}>
            <div className={s.container_text}>
                <div className={s.main_title}>Про баскетбол</div>
                <div className={s.heading}>Все самое интересное здесь</div>
            </div>
            <div className={s.container_block}>
                <div className={s.text}>
                    <p className={s.go}>Отправляйтесь</p>
                    <p className={s.journey}>в путешествие</p>
                    <p className={s.journey}>великого спорта</p>
                </div>
                <div className={s.card}>
                    {user && (
                        <div className={s.exit}>
                            <div>Привет, {user}</div>
                            <div className={s.btn_exit}>
                                <button className={s.glow_on_hover} onClick={() => setUser('')}>ВЫЙТИ</button>
                            </div>

                        </div>
                    )}
                    {!user && (
                        <div>
                            <div className={s.registration}>Регистрация</div>
                            <div className={s.name}>
                                <label>Ваша фамилия</label>
                            </div>

                            <div className={s.input}>
                                <input value={surName} onChange={(e) => setSurName(e.target.value)} />
                            </div>

                            <div className={s.name}>
                                <label>Ваше имя</label>
                            </div>

                            <div className={s.input}>
                                <input value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className={s.btn}>
                                <button className={s.glow_on_hover} onClick={() => setUser(surName + ' ' + name)}>ВОЙТИ</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}



export default Home