import { useParams } from "react-router-dom";

function AccomodationPage() {
  const { id } = useParams();
  return <h1>Logement sélectionné : {id}</h1>;
}

export default AccomodationPage;
