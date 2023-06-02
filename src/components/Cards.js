import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  // Array of shows fetched
  return (
    <div className="container my-2">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((object, index) => {
          return (
            <div class="col" key={index}>
              <div className="card">
                <img
                  src={object.show.image.original}
                  class="card-img-top image-thumbnail"
                  height={400}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{object.show.name}</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Genre: {object.show.genres[0]}
                    </li>
                    <li class="list-group-item">
                      Rating: {object.show.rating.average}
                    </li>
                  </ul>
                  <div class="card-body text-start">
                    <Link
                      className="card-link"
                      to={`/review/${object.show.id}`}
                    >
                      <button type="button" class="btn btn-outline-dark">
                        More Information
                      </button>
                    </Link>
                    <a href={object.show.url} target="blank" class="card-link">
                      <button type="button" class="btn btn-outline-success">
                        Visit Site
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
