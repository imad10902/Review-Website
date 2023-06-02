import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
  let idNumber = parseInt(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  console.log(data.find((item) => item.show.id === idNumber));
  //Getting the show whose ID matches with the required ID
  return (
    <>
      <Header />
      <div class="container">
        <h1 class="text-center">
          {data.find((item) => item.show.id === idNumber).show.name}
        </h1>
      </div>
      <div className="container">
        <div class="card">
          <img
            src={
              data.find((item) => item.show.id === idNumber).show.image.original
            }
            height={1000}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text text-center">
              <button
                type="button"
                class="btn btn-outline-dark "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book Ticket
              </button>
            </p>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              {/* Modal Form to Book Tickets with Title of the show on top */}
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {data.find((item) => item.show.id === idNumber).show.name}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          Recipient Name:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="message-text" class="col-form-label">
                          Type Something:
                        </label>
                        <textarea
                          class="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
