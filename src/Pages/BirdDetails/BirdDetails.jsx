import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BirdDetails = (props) => {
  const [bird, setBird] = useState(null);

  const { id } = useParams();

  const url = `https://ga-audubon-api.herokuapp.com/api/birds/${id}`;

  useEffect(() => {
    async function fetchBird() {
      try {
        const response = await fetch(url);
        const birdData = await response.json();
        // console.log(birdData)

        setBird(birdData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBird();
  }, [url]);

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    // console.log(bird);
    return (
      <div className="details-container">
        <img src={bird.image} alt={bird.name} />
        <div className="details">
          <h2>{bird.name}</h2>
          <h3>({bird.genus})</h3>
          <h4>Conservation Status</h4>
          <p>{bird.conservationStatus}</p>
          <a href={bird.homepage} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  };

  return <section>{bird ? loaded() : loading()}</section>;
};

export default BirdDetails;
