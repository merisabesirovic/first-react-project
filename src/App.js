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
// //
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

import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar1/Navbar1";
// import PersonCard from "./components/PersonCard/PersonCard";
// import persons from "./common/persons.json";
// import HotelCards from "./components/HotelCards/Cards1";
// import hotels from "./common/cards.json";
// import QuoteCard from "./components/Quotes/QuoteCard";
// import Pagination from "./components/Pagination/Pagination";
// import TeamCard from "./components/TeamCards/TeamCard";
import teams from "./common/teams.json";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Hotel from "./pages/hotel/Hotel";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useContext, useState } from "react";
import { AppContext } from "../src/context/AppContext";
export const BASE_URL = "https://api.quotable.io";
// localStorage.clear();
const poruke = [
  "Danas je subota",
  "U subotu je lepo vreme",
  "Subota je dan za odmor",
  "Subota je dan za kupovinu",
  "Subota je dan za druzenje",
  "Subota je dan za kafu",
];
function App() {
  const [arr, setArr] = useState(poruke);
  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };
  const [teams1, setTeams] = useState(teams);
  console.log(teams1);
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
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

  // return (
  //   <BrowserRouter>
  //     <div style={{ overflowX: "hidden" }} className="App">
  //       <Navbar />
  //       <Routes>
  //         <Route index element={<Form />} />
  //         <Route
  //           path="/about-us"
  //           element={
  //             <div
  //               style={{
  //                 display: "grid",
  //                 gridTemplateColumns: "repeat(4, 250px)",
  //                 justifyContent: "center",
  //                 gridAutoRows: "minmax(420px, auto)",
  //                 gridGap: "40px",
  //               }}
  //             >
  //               {persons.map((person) => (
  //                 <PersonCard
  //                   key={person.id}
  //                   imageURL={person.imageURL}
  //                   fullName={person.fullName}
  //                   location={person.location}
  //                   description={person.description}
  //                   goToRepositories={person.goToRepositories}
  //                 />
  //               ))}
  //             </div>
  //           }
  //         />
  //         <Route
  //           path="/quotes"
  //           element={
  //             <div>
  //               <div className="container">
  //                 {quotes.map((quote) => (
  //                   <div className="card" key={quote._id}>
  //                     <h2>{quote.author}</h2>
  //                     <p>{quote.content}</p>
  //                   </div>
  //                 ))}
  //               </div>
  //               <Pagination
  //                 currentPage={page}
  //                 handlePageClick={handlePageClick}
  //               />
  //             </div>
  //           }
  //         />
  //         <Route
  //           path="/booking"
  //           element={
  //             <div
  //               style={{
  //                 boxSizing: "border-box",
  //                 marginTop: "30px",
  //                 padding: "0px",
  //                 display: "grid",
  //                 gridTemplateColumns: "repeat(3, 250px)",
  //                 justifyContent: "center",
  //                 gridAutoRows: "minmax(420px, auto)",
  //                 gridGap: "100px",
  //               }}
  //             >
  //               {hotels.map((hotel) => (
  //                 <HotelCards
  //                   key={hotel.id}
  //                   imageURL={hotel.imageURL}
  //                   name={hotel.name}
  //                   stars={hotel.stars}
  //                   location={hotel.location}
  //                   rating={hotel.rating}
  //                   comments={hotel.comments}
  //                   numberOfReviews={hotel.numberOfReviews}
  //                 />
  //               ))}
  //             </div>
  //           }
  //         />
  //         <Route
  //           path="/poruka"
  //           element={
  //             <div>
  //               <div
  //                 style={{
  //                   height: "200px",
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   gap: "10px",
  //                 }}
  //               ></div>
  //               <button
  //                 onClick={() => {
  //                   reverseArr();
  //                   console.log("okrenuo se niz");
  //                 }}
  //               >
  //                 Promeni raspored poruka
  //               </button>
  //               {arr.map((poruka) => (
  //                 <p>{poruka}</p>
  //               ))}
  //             </div>
  //           }
  //         />
  //         {/* <Route
  //         path="/league"
  //         element={
  //     //   {teams.map((teamCard) => (
  //     //     <TeamCard
  //     //       key={teamCard.id}
  //     //       name={teamCard.name}
  //     //       matches={teamCard.matches}
  //     //       points={teamCard.points}
  //     //       deleteTeam={() => deleteTeam(teamCard.id)}
  //     //     />
  //     //   ))}}/>; */}
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );

  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/users" element={<Users />} />
          {/* <Route path="/" element={token ? <Users /> : <Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/aboutus"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>Nepostojeca stranica</p>} />
        </Routes>
      </main>
      <Footer style={{ justifySelf: "end" }} />
    </div>
  );
}

export default App;
