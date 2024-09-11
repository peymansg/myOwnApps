import { ReturnBook } from "./ReturnBook";
import { useEffect,useState } from "react";
import BookModel from "../../../modles/BookModel";

export const Carousel = () => {

  const [books,setBooks]=useState<BookModel[]>([]);
  return (
    <div className="container" style={{ height: 550 }}>
      <div className="carousel-homepage-title mt-5 text-center">
        <h3>I Stayed Aeake For Reading Book Till Night Too Late</h3>
      </div>
      <div
        id="carouselExampleControles"
        className="carousel carousel-dark slide d-none d-lg-block mt-5"
        data-bs-interval="false"
      >
        {/*Desktop */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center align-items-center mt-3">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row justify-content-center align-items-center mt-3">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row justify-content-center align-items-center mt-3">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControles"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControles"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>
      <div className="homepage-carousel-title text-center">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
