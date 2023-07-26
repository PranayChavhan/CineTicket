import React from 'react'
import { useLocation } from "react-router-dom";
function BookTicket() {
    const location = useLocation();

    const movie = location.state?.movie || null;
    const genres = movie.genres?.map(({ name }) => name).join(", ");
    if (!movie) {
      return <div>No movie information available.</div>;
    }


  return (
    <div>
         <div className="min-w-full bg-darkBackground-700 py-3 text-white px-5 flex flex-row justify-between items-start" >
<div>


<h1 className="text-[18px] font-medium">{movie.original_title}</h1>
<div className="flex  flex-col gap-2 text-white">
  <h4 className='text-[14px]'>4k rating</h4>
  <h4 className='text-[12px]'>
    {movie.runtime} min | {genres}
  </h4>
</div>
</div>


<div>
    <button className='px-6 py-[6px] border border-gray-600 rounded-sm text-[14px]'>2 Tickets</button>
</div>
</div>

seats
    </div>
  )
}

export default BookTicket