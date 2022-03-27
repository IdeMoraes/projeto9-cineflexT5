import Header from "../Header";

export default function ShowTimesPage(){
    return(
        <div className="showtimes-page">
            <Header/>
            <div className="step">Selecione o horário</div>
            <div className="days">
                <div className="day">
                    <div className="date">Quinta-feira - 24/06/2021</div>
                    <div className="showtimes">
                        <div className="showtime">15:00</div>
                        <div className="showtime">19:00</div>
                    </div>
                </div>
                <div className="day">
                    <div className="date">Sexta-feira - 25/06/2021</div>
                    <div className="showtimes">
                        <div className="showtime">15:00</div>
                        <div className="showtime">19:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
}