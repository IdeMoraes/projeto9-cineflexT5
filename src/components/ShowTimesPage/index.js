import './style.css';
import Header from "../Header";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ShowTimesPage(){
    const  parameter   = useParams();
    const [days,setDays]=useState([]);
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${parameter.idFilme}/showtimes`);
		requisicao.then(resposta => {
            console.log(resposta.data);
            setDays(resposta.data.days);
        });
	}, []);
    console.log(days);
    return(
        <div className="showtimes-page">
            <Header/>
            <div className="step">Selecione o horário</div>
            <div className="days">
                {days.map(day=> <Day weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>)}
            </div>
        </div>
    );
}
function Day(props){
    return(
        <div className="day">
            <div className="date">{props.weekday} - {props.date}</div>
            <div className="showtimes">
                {props.showtimes.map(showtime=> <Showtime showtime={showtime.name} id={showtime.id}/>)}
            </div>
        </div>
    );
}
function Showtime(props){
    return(
        <Link to={`/assentos/${props.id}`}>
            <div className="showtime">{props.showtime}</div>
        </Link>
    );
}