import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Header from "../Header";

export default function MoviesPage() {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		requisicao.then(resposta => {
            setMovies(resposta.data);
        });
	}, []);
    return (
      <div className="movies-page">
        <Header/>
        <div className="step">Selecione o filme</div>
        <div className="in-theaters">
            {movies.map(movie=> <MoviePoster imageURL={movie.posterURL} id={movie.id}/>)}
        </div>
      </div>
    );
  }
  function MoviePoster(props){
      return(
        <Link to={`/sessoes/${props.id}`}> {/* Por que ese to precisa de {} aqui? */}
            <div className="movie-poster" onClick={()=>alert(props.id)}> {/* Por que props.id só funciona sem {} aqui? */}
                <img
                src={props.imageURL} alt="movie poster"
                />
            </div>
        </Link>
      );
  }