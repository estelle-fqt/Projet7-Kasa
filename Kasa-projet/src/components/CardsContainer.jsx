//charge les données et transmission à cards.jsx

import Card from "../components/Card";
import data from "../datas/data.json";
import "../styles/CardsContainer.scss";

import { useEffect, useState } from "react";

function CardsContainer() {
  const [locations, setLocations] = useState([]);

  //charge les données json
  useEffect(() => {
    setLocations(data);
  }, []);

  return (
    <div className="cards-container">
      {locations.map((location) => (
        <Card
          className="card"
          key={location.id}
          title={location.title}
          cover={location.cover}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
