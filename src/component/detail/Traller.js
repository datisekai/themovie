import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_API_ORIGINAL, SRC_YTB } from "../../api/constant";
import "./traller.css";

function Traller() {
  const { idDetail } = useParams();
  const [trallers, setTrallers] = useState([]);
  const [details, setDetails] = useState({});
  const api = `https://api.themoviedb.org/3/movie/${idDetail}/videos?api_key=${API_KEY}&language=en-US`;
  const apiDetails = `https://api.themoviedb.org/3/movie/${idDetail}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    getTraller(api)
    getDetail(apiDetails)
  }, []);


  const getTraller = (api) => {
    fetch(api)
      .then((respon) => respon.json())
      .then((data) => {
        setTrallers(data.results);
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
    <div
      className="traller" data-aos="fade-left" data-aos-offset="300" data-aos-duration="700"
      style={
        details.backdrop_path
          ? {
              backgroundImage: `url(${IMAGE_API_ORIGINAL}${details.backdrop_path})`,
            }
          : { backgroundImage: "url(https://i.imgur.com/Nd7b2Ha.jpg)" }
      }
    >
      {trallers.map((traller) => (
        <div className="traller-item" key={traller.id}>
          <iframe
            width="50%"
            height="315"
            src={`${SRC_YTB}${traller.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Traller;
