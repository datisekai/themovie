import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, IMAGE_API_W500 } from "../../api/constant";
import "./detail.css";

const Similar = ({ id }) => {
  const api = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    getSimilar(api);
  }, []);

  const getSimilar = (api) => {
    fetch(api)
      .then((respon) => respon.json())
      .then((data) => {
        setSimilars(data.results);
      });
  };

  return (
   
    
    <div className="same-genre">
      <h3 className="title-same">Some Genre</h3>
      <div className="same-list" data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">
        {similars &&
          similars.map((similar) => (
            <Link to={`/detail/${similar.id}`} key={similar.id}>
            <div className="same-item">
              <img
                src={
                  similar.poster_path
                    ? `${IMAGE_API_W500}${similar.poster_path}`
                    : "https://i.imgur.com/Nd7b2Ha.jpg"
                }
              ></img>
              <h3>{similar.original_title || similar.title}</h3>
            </div>
            </Link>
            
          ))}
      </div>
    </div>
   
    
  );
};

export default Similar;
