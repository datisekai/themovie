import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  API_KEY,
  IMAGE_API,
  IMAGE_API_ORIGINAL,
  IMAGE_API_W500,
} from "../../api/constant";
import "./detail.css";
import Gender from "./Gender";
import Similar from "./Similar";

const Detail = () => {
  const { idDetail } = useParams();
  //https://api.themoviedb.org/3/movie/568124?api_key=b8e278156dce7136eb27699af4461d6c&language=en-US
  const [details, setDetails] = useState({});
  const [gender, setGender] = useState({});

  const { cast } = gender;

  const api = `https://api.themoviedb.org/3/movie/${idDetail}?api_key=${API_KEY}&language=en-US`;
  const apiGender = `https://api.themoviedb.org/3/movie/${idDetail}/credits?api_key=${API_KEY}`;

  useEffect(() => {
    getDetail(api);
    getGender(apiGender);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [idDetail]);

  const getGender = (api) => {
    fetch(api)
      .then((respon) => respon.json())
      .then((data) => {
        setGender(data);
      });
  };

  const getDetail = (api) => {
    fetch(api)
      .then((respon) => respon.json())
      .then((data) => {
        setDetails(data);
      });
  };
  return (
    <div className="detail">
      <div
        className="detail-slider"
        style={
          details.backdrop_path
            ? {
                backgroundImage: `url(${IMAGE_API_ORIGINAL}${details.backdrop_path})`,
              }
            : { backgroundImage: "url(https://i.imgur.com/Nd7b2Ha.jpg)" }
        }
      >
        <div className="detail-info">
          <div className="detail-img">
            <img
              src={
                details.poster_path
                  ? `${IMAGE_API_W500}${details.poster_path}`
                  : "https://i.imgur.com/Nd7b2Ha.jpg"
              }
            ></img>
          </div>

          <div className="detail-content">
            <h2>{details.original_title || details.name || "Invalid name"}</h2>
            <p>{details.overview}</p>
            <p>
              Release date: {details.release_date || "Invalid release_date"}
            </p>
            <div className="detail-genres">
              {details.genres &&
                details.genres.map((detail) => <p key={detail.id}>{detail.name}</p>)}
            </div>
            <div className="detail-btn">
              <Link to={`/detail/watch/${idDetail}/${details.imdb_id}`}>
                <button className="btn-watch">Xem ngay</button>
              </Link>
              <Link to={`/detail/traller/${idDetail}`}>
                <button className="btn-traller">Xem traller</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Gender cast={cast} />

      <Similar id={idDetail}/>
    </div>
  );
};

export default Detail;
