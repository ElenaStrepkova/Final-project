import { useLocalStorage } from '../hook/useLocalStorage'
import { useState } from 'react'
import s from './style.module.css'


const Chat = () => {
    const [messageData, setMessageData] = useLocalStorage('CHAT', [])
    const [inputValue, setInputValue] = useState("")
    const [user] = useLocalStorage('USER')
    const changeChat = () => {
        setMessageData([...messageData, `${user ? user : 'Гость'} : ${inputValue}`])
        setInputValue('')
    }

    return (
        <div className={s.chat_block}>
            <div className={s.heading_text}>Чат участников сайта</div>

            <div className={s.container}>
                <div className={s.container_chat}>

                    {messageData.map((el, i) => {
                        return (
                            <div key={i}>
                                {i + 1}. {el}
                            </div>
                        )
                    })}
                    <div>
                        <input className={s.input_text} placeholder='Введите сообщение' value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                        <div className={s.btn}>
                            <button className={s.glow_on_hover} onClick={changeChat}>Отправить</button>
                            <button className={s.glow_on_hover} onClick={() => setMessageData([])}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default Chat