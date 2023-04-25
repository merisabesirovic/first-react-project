// // import logo from "./logo.svg";
// import React, { useEffect, useState } from "react";
// import "./App.css";
// // import Greet from "./components/Greet";
// import Navbar from "./components/Navbar1/Navbar1";
// // import HotelCards from "./components/HotelCards/Cards1";
// // import hotels from "./common/cards.json";
// // import Form from "./components/Form/Form";
// // import TeamCard from "./components/TeamCards/TeamCard";
// // import teams from "./common/teams.json";
// // const poruke = [
// //   "Danas je subota",
// //   "U subotu je lepo vreme",
// //   "Subota je dan za odmor",
// //   "Subota je dan za kupovinu",
// //   "Subota je dan za druzenje",
// //   "Subota je dan za kafu",
// // ];
// export const BASE_URL = "https://api.quotable.io";
// function App() {
//   // const [arr, setArr] = useState(poruke);
//   // const reverseArr = () => {
//   //   const _arr = [...arr];
//   //   const reversed = _arr.reverse();
//   //   setArr(reversed);
//   // };
//   // const [teams1, setTeams] = useState(teams);
//   // console.log(teams1);
//   // const deleteTeam = (id) => {
//   //   const filteredteams = teams1.filter((team) => team.id !== id);
//   //   setTeams(filteredteams);
//   // };
//   const [quotes, setQuotes] = useState([]);
//   const [page, setPage] = useState(2);

//   const getQuotes = async () => {
//     const getQuotes = await fetch(`${BASE_URL}/quotes?page=5`);
//     const data = await getQuotes.json();
//     const results = data.results;

//     setQuotes(results);
//     console.log(data);
//     console.log(quotes);
//   };
//   getQuotes();
//   useEffect(() => {
//     getQuotes();
//   }, [page]);
//   return (
//     <div style={{ overflowX: "hidden" }} className="App">
//       <Navbar></Navbar>{" "}
//     </div>
//   );
//   //       style={{
//   //         boxSizing: "border-box",
//   //         marginTop: "30px",
//   //         padding: "0px",
//   //         display: "grid",
//   //         gridTemplateColumns: "repeat(3, 250px)",
//   //         justifyContent: "center",
//   //         gridAutoRows: "minmax(420px, auto)",
//   //         gridGap: "40px",
//   //       }}
//   //     >
//   //       {hotels.map((hotel) => (
//   //         <HotelCards
//   //           key={hotel.id}
//   //           imageURL={hotel.imageURL}
//   //           name={hotel.name}
//   //           stars={hotel.stars}
//   //           location={hotel.location}
//   //           rating={hotel.rating}
//   //           comments={hotel.comments}
//   //           numberOfReviews={hotel.numberOfReviews}
//   //         />
//   //       ))}
//   //     </div>
//   //     <Form />
//   //     <div
//   //       style={{
//   //         height: "200px",
//   //         display: "flex",
//   //         flexDirection: "column",
//   //         justifyContent: "center",
//   //         alignItems: "center",
//   //         gap: "10px",
//   //       }}
//   //     ></div>
//   //     <button
//   //       onClick={() => {
//   //         reverseArr();
//   //         console.log("okrenuo se niz");
//   //       }}
//   //     >
//   //       Promeni raspored poruka
//   //     </button>
//   //     {arr.map((poruka) => (
//   //       <p>{poruka}</p>
//   //     ))}
//   //     {teams.map((teamCard) => (
//   //       <TeamCard
//   //         key={teamCard.id}
//   //         name={teamCard.name}
//   //         matches={teamCard.matches}
//   //         points={teamCard.points}
//   //         deleteTeam={() => deleteTeam(teams1.id)}
//   //       />
//   //     ))}
//   //   </div>
//   // );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar1/Navbar1";
import QuoteCard from "./components/Quotes/QuoteCard";
import Pagination from "./components/Pagination/Pagination";
export const BASE_URL = "https://api.quotable.io";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch(`${BASE_URL}/quotes?page=${page}`);
      const data = await response.json();
      const results = data.results;
      setQuotes(results);
      console.log(data);
    };
    getQuotes();
  }, [page]);

  return (
    <div style={{ overflowX: "hidden" }} className="App">
      <Navbar />
      <div className="container">
        {quotes.map((quote) => (
          <div className="card" key={quote._id}>
            <h2>{quote.author}</h2>
            <p>{quote.content}</p>
          </div>
        ))}
      </div>
      <Pagination currentPage={page} handlePageClick={handlePageClick} />
    </div>
  );
}

export default App;
