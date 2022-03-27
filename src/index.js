import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import ShowTimesPage from "./components/ShowTimesPage";
import './css/style.css';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MoviesPage />} />
				<Route path="/sessoes/:idFilme" element={<ShowTimesPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));

function SeatsPage() {
  return <div></div>;
}
function SuccessPage() {
  return <div></div>;
}
