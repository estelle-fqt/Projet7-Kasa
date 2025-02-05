import Card from "../components/Card";
import { locationList } from "../datas/data.json";

import "../styles/CardsContainer.scss";

function CardsContainer() {
  return (
    <div className="cards-container">
      <ul>
        {locationList.map(({ id, cover, title }) => (
          <div key={id}>
            <Card cover={cover} title={title} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CardsContainer;
