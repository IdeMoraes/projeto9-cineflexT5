import ReactDOM from "react-dom";

function App() {
  return (
    <>
      <MoviesPage />
      <ShowTimingPage />
      <SeatsPage />
      <SuccessPage />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));

function MoviesPage() {
  return (
    <div className="main-page">
      <header>CINEFLEX</header>
      <div className="step">Selecione o filme</div>
      <div className="in-theaters">
        <div className="movie-poster">
          <img
            src="https://news.artnet.com/app/news-upload/2018/08/1667-741x1024.jpg"
            alt="movie poster"
          />
        </div>
      </div>
    </div>
  );
}
function ShowTimingPage() {
  return <div></div>;
}
function SeatsPage() {
  return <div></div>;
}
function SuccessPage() {
  return <div></div>;
}
