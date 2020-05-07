import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerControlExample from "./../VideoStream/VideoStream";
import api from "./../../service/api";
import './style.css';

export default function VideoList() {
  const [url, setUrl] = useState();
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    loadUrlList();
  }, []);

  async function loadUrlList() {
    debugger;
    const response = await api.get("/videos");
    setUrlList(response.data);
  }

  function openVideoStream(url) {
    setUrl(url);
  }

  return (
    <>
      <ul>
        {urlList.map((urlApi) => {
          return (
            <li key={urlApi.name} onClick={() => openVideoStream(urlApi.url)}>
              {urlApi.name}
            </li>
          );
        })}
      </ul>
      <PlayerControlExample url={url} />
    </>
  );
}
