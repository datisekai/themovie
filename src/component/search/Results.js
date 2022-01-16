import React, { useState,useEffect } from 'react'
import { IMAGE_API, SEARCH_API } from '../../api/constant';
import { Link, useParams } from "react-router-dom";
import './results.css'

const Results = () => {
    const [films, setFilms] = useState([])
    const {searchstring} = useParams()
    console.log(searchstring);
    useEffect(() => {
        getFilms(`${SEARCH_API}${searchstring}`);
      }, []);
    
      const getFilms = (api) => {
        fetch(api)
          .then((respon) => respon.json())
          .then((data) => {
            setFilms(data.results);
          });
      };
      const handleColorRate = (rate) => {
        if (rate > 8) return "green";
        else if (rate >= 6.5) return "blue";
        else return "red";
      };    
    return (
        <>
        <div className="container">
          <div className="films" data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">
            {films &&
              films.map((film) => (
                <Link to={`/detail/${film.id}`} key={film.id}>
                  <div className="film">
                    <div className="film-image">
                      <img
                        src={
                          film.backdrop_path != null
                            ? `${IMAGE_API}${film.backdrop_path}`
                            : "https://i.imgur.com/Nd7b2Ha.jpg"
                        }
                      ></img>
                    </div>
  
                    <div className="film-content">
                      <div className="film-name">
                        <h3 title={film.original_title}>
                          {film.original_title || film.name}
                        </h3>
                      </div>
  
                      <div
                        className={`${handleColorRate(
                          film.vote_average
                        )} film-rate`}
                      >
                        <p>{film.vote_average}</p>
                      </div>
                    </div>
  
                    <div className="overview">
                      <h1>Overview</h1>
                      <p>{film.overview}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        ;
      </>
    )
}

export default Results
