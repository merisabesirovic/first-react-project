// import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
import Navbar from "./components/Navbar1/Navbar1";
import HotelCards from "./components/HotelCards/Cards1";
import hotels from "./common/cards.json";

function App() {
  return (
    <div style={{ overflowX: "hidden" }} className="App">
      <Navbar></Navbar>
      <div
        style={{
          boxSizing: "border-box",
          marginTop: "30px",
          padding: "0px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 250px)",
          justifyContent: "center",
          gridAutoRows: "minmax(420px, auto)",
          gridGap: "40px",
        }}
      >
        {hotels.map((hotel) => (
          <HotelCards
            imageURL={hotel.imageURL}
            name={hotel.name}
            stars={hotel.stars}
            location={hotel.location}
            rating={hotel.rating}
            comments={hotel.comments}
            numberOfReviews={hotel.numberOfReviews}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
