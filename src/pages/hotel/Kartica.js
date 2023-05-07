import "./Hotel.css";
export default function Katrica(props) {
  return (
    <div className="single-card">
      <img
        style={{ borderRadius: "1.5rem" }}
        src={props.imageURL}
        alt="hotel"
      ></img>
      <h1>{props.name}</h1>
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>
        Hotel description and location
      </p>
      <p style={{ fontSize: "15px" }}>{props.location}</p>
      <b>Property highlights</b>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <span>🚗 Free parking</span>
          <span>🐾 Pet friendly</span>
        </div>
        <div>
          <span style={{ padding: "5px" }}>Free wifi and 24/7 front desk</span>
        </div>
      </div>
      <div className="getAround">
        <p>
          <span>🚍</span>Getting around
        </p>
        <p>
          <span>🚍</span>Dublin Airport (DUB) - 26 min drive
        </p>
        <p>
          <span>🚍</span>Dublin Drumcondra Station - 5 min drive
        </p>
        <p>
          <span>🚶</span>Dublin Tara Street Station - 26 min walk
        </p>
        <p>
          <span>🚶</span>Connolly Station - 29 min walk
        </p>
        <p>
          <span>🚶</span>Four Courts Station - 8 min walk
        </p>
        <p>
          <span>🚶</span>Smithfield Station - 5 min walk
        </p>
      </div>

      <p className="hoteldesc">{props.description}</p>
    </div>
  );
}
