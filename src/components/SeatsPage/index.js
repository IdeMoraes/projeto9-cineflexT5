import './style.css';
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SeatsPage(){
    const  parameter   = useParams();
    const [posterURL,setPosterURL]=useState([]);
    const [title,setTitle]=useState([]);
    const [weekday,setWeekday]=useState([]);
    const [showtime,setShowtime]=useState([]);
    const [seats,setSeats]=useState([]);

    const [ids,setIds]= useState([]);
    const [name,setName]=useState([]);
    const [cpf,setCpf]=useState([]);

    useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${parameter.idSessao}/seats`);
		requisicao.then(resposta => {
            //console.log(resposta.data);
            setPosterURL(resposta.data.movie.posterURL);
            setTitle(resposta.data.movie.title);
            setWeekday(resposta.data.day.weekday);
            setShowtime(resposta.data.name);
            setSeats(resposta.data.seats);
        });
	}, []);
    //Antes tentei usar apenas resposta.data na requisição then e depois usar.movie.posterURL fora do useEffect, e não funcionou :(
    function adicionarAssento(id){
        setIds([...ids,parseInt(id)]);
        console.log(ids);
    }
    function enviarRequisicao(){
        const objetoEnviado={
            ids: ids,
            name: name,
            cpf: cpf
        }
        console.log(objetoEnviado);
        const requisicao=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",objetoEnviado);
        requisicao.then(resposta=>console.log(resposta));
    }
    return(
        <div className="seats-page">
            <Header/>
            <div className="step">Selecione o(s) assento(s)</div>
            <div className="seating-plan">
                {seats.map(seat=> <Seat name={seat.name} isAvailable={seat.isAvailable} adicionarAssento={adicionarAssento}/>)}
            </div>
            <div className="legends">
                <div className="legend">
                    <div className="legend-circle selected"></div>
                    <p>Selecionado</p>
                </div>
                <div className="legend">
                    <div className="legend-circle available"></div>
                    <p>Disponível</p>
                </div>
                <div className="legend">
                    <div className=" legend-circle unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="user-data-inputs">
                <p>Nome do comprador:</p>
                <input onChange={e=>setName(e.target.value)}/>
                <p>CPF do comprador:</p>
                <input onChange={e=>setCpf(e.target.value)}/>
            </div>
            <button onClick={()=>enviarRequisicao()}>Reservar assento(s)</button>
            <Footer posterURL={posterURL} title={title} weekday={weekday} showtime={showtime}/>
        </div>
    );
}
function Seat(props){
    if(props.isAvailable===true){
        return (
            <div className="seat available" onClick={()=>props.adicionarAssento(props.name)}>{props.name} </div>
        );
    }
    else{
        return (
            <div className="seat unavailable" onClick={()=>alert("Alguém já reservou este assento!")}>{props.name}</div>
        )
    }

}
