import React from "react";
import { useLocation } from "react-router-dom";
import Navbarr from "../components/Navbar/Navbar.Component";
import { useNavigate } from "react-router-dom";
const TicketBook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie || null;
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  if (!movie) {
    return <div>No movie information available.</div>;
  }

  const bookTicket = () => {
    // Here, you can pass the movie props to the "ticketbook" page using state
    navigate("/booking", { state: { movie } });
  };


  return (
    <div>
        <Navbarr/>
      <div className="min-w-full bg-darkBackground-700 py-3 text-white px-[19.5rem]">

        <h1 className="text-[30px] font-medium">{movie.original_title}</h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>4k rating</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
      </div>

      <div className="min-w-full bg-white h-10 px-[19.5rem]">
        Calender
      </div>
      <div className="bg-white min-w-full my-3 pb-4 px-[19.5rem]">

        <div className="flex flex-row items-center justify-end text-[11px] h-10">
        🟢 Available  🟠 Fast Filling  ☐ Subtitles Language
        </div>


        <div className="flex flex-row gap-5 items-center justify-between w-[40rem]">
            <div>
                <h1 className="text-sm font-semibold">
                E-SQUARE ELITE: Xion Mall, 
                Hinjawadi, Pune
                </h1>
                <div className="text-[11px] mt-2">
                M-Ticket Food & Beverage
                </div>
            </div>
            <div>
                <button
                onClick={bookTicket}
                 className="px-8 py-2  border border-gray-500 text-green-500 text-sm font-medium">
                    10.30 PM
                </button>
            </div>
        </div>

        <div className="flex flex-row gap-5 items-center pt-8 justify-between w-[40rem]">
            <div>
                <h1 className="text-sm font-semibold">
                Vishal Cinemaas: Pimpri
                </h1>
                <div className="text-[11px] mt-2">
                M-Ticket Food & Beverage
                </div>
            </div>
            <div>
                <button className="px-8 py-2  border border-gray-500 text-green-500 text-sm font-medium">
                    10.50 PM
                </button>
            </div>
        </div>


        <div className="flex flex-row gap-5 items-center pt-8 justify-between w-[40rem]">
            <div>
                <h1 className="text-sm font-semibold">
                Cinepolis: Nexus WESTEND Mall Aundh, Pune
                </h1>
                <div className="text-[11px] mt-2">
                M-Ticket Food & Beverage
                </div>
            </div>
            <div>
                <button className="px-8 py-2  border border-gray-500 text-green-500 text-sm font-medium">
                    07.30 PM
                </button>
            </div>
        </div>


        <div className="flex flex-row gap-5 items-center pt-8 justify-between w-[40rem]">
            <div>
                <h1 className="text-sm font-semibold">
                City Pride: Satara Road
                </h1>
                <div className="text-[11px] mt-2">
                M-Ticket Food & Beverage
                </div>
            </div>
            <div>
                <button className="px-8 py-2  border border-gray-500 text-green-500 text-sm font-medium">
                    07.00 PM
                </button>
            </div>
        </div>
      </div>
      </div>

  );
};

export default TicketBook;
