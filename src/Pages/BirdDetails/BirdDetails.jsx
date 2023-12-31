import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BirdDetails = (props) => {
  const [bird, setBird] = useState(null);
  const controller = new AbortController();

  const { id } = useParams();

  const url = `https://ga-audubon-api.herokuapp.com/api/birds/${id}`;

  const fetchBird = async () => {
    try {
      const response = await fetch(url, { signal: controller.signal });
      const birdData = await response.json();
      // console.log(birdData)

      setBird(birdData);
    } catch (err) {
      console.log(err);
    }
  };

  const loadBird = () => {
    fetchBird();
    return () => {
        controller.abort();
      };
  };

  useEffect(loadBird, [loadBird]);

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
