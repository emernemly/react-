import React from "react";
import { films } from "./../../constants/data";
import Movies from "./Movies/Movies";

const ListMovies = () => {
  return (
    <>
      <div className="cardsList">
        {films.map((film, i) => {
          return <Movies film={film} key={i} />;
        })}
      </div>
      <div className="sip">Movies greater or equal to 7.5</div>
      <div className="cardsList">
        {films
          .filter((film) => film.rate >= 7.5)
          .map((film, i) => {
            return <Movies film={film} key={i} />;
          })}
      </div>
    </>
  );
};

export default ListMovies;
