import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_API_ORIGINAL, SRC_EMBED_MOVIE, IMAGE_API_W500 } from "../../api/constant";
import Similar from "../detail/Similar";

import "./watch.css";

const Watch = () => {
  const { idDetail,idImdb } = useParams();
  const [detail, setDetail] = useState({})
  const [similars, setSimilars] = useState([]);

  const api = `https://api.themoviedb.org/3/movie/${idDetail}?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    getDetail(api,setDetail);
  }, []);


  const getDetail = (api,set) => {
    fetch(api)
      .then((respon) => respon.json())
      .then((data) => {
        set(data);
      });
  };

  return (
    <div className="watch" style={
      detail.backdrop_path
        ? {
            backgroundImage: `url(${IMAGE_API_ORIGINAL}${detail.backdrop_path})`,
          }
        : { backgroundColor: "#1A1A1A" }
    }>
      <iframe
        width="70%"
        height="315"
        src={`${SRC_EMBED_MOVIE}${idImdb}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>{detail.original_title || detail.name || "Invalid name"}</h3>
      <p>{detail.overview || "Invalid"}</p>
      
    </div>
  );
};

export default Watch;
