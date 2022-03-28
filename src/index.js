import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/style.css';
import MoviesPage from "./components/MoviesPage";
import ShowTimesPage from "./components/ShowTimesPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SucessPage";

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


