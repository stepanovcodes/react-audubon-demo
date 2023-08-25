import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Birds = (props) => {
  const [birds, setBirds] = useState([]); // <--Set the initial state here by passing it an empty array []

  const fetchBirds = async () => {
    try {
      const response = await fetch(
        "https://ga-audubon-api.herokuapp.com/api/birds"
      );
      const birdData = await response.json();
      //   console.log(birdData);
      setBirds(birdData);
    } catch (err) {
      console.log(err);
    }
  };

  // Define an effect function that calls fetchBirds
  const loadBirds = () => {
    fetchBirds();
  };

  useEffect(loadBirds, []);

  return (
    <section className="container">
      {birds.map((bird) => {
        return (
          <Link to={`/details/${bird._id}`} key={bird._id}>
            <div className="card">
              <div className="card-image">
                <img src={bird.image} alt={bird.name} />
              </div>
              <div className="card-title">
                <h3>{bird.name}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Birds;
