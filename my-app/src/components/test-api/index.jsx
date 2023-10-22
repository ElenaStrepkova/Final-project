import { useEffect, useState } from 'react'
import s from './style.module.css'

const TestApi = () => {
    const [teamData, setTeamData] = useState([])

    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '864af56f8dmsh3e2bdbce2b1cbc4p1e28e5jsn18488983d9d3',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setTeamData(res.data)
            })
    }, [])
    return (

        <div className={s.block}>
            <div className={s.heading}>Команды</div>
            {teamData.map((el) => {
                return (
                    <div className={s.players} key={el.id}>
                        <div>Имя: {el.first_name} - Фамилия: {el.last_name} - Позиция: {el.position}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default TestApi