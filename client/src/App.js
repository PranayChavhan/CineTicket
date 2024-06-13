import "./App.css";
import axios from "axios";
// Routing
import { Routes, Route } from "react-router-dom";
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";
import LoginPage from "./pages/LoginPage";
import TicketBook from "./pages/Ticket.page";
import BookTicket from "./pages/Book.ticket";

axios.defaults.baseURL = "https://cine-ticket.vercel.app/";
function App() {
  return (
    <Routes >
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
      <Route path="/ticketbook" element={<TicketBook/>} />
      <Route path="/booking" element={<BookTicket/>} />
    </Routes>
  );
}

export default App;
