import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import PlayerControlExample from "./../VideoStream/VideoStream";
import ButtonUpload from "./../ButtonUpload/ButtonUpload";
import api from "./../../service/api";
import "./style.css";

export default function VideoList() {
    const [url, setUrl] = useState();
    const [urlList, setUrlList] = useState([]);
    const [showPlayer, setShowPlayer] = useState();
    const [fileUpload, setFileUpload] = useState([]);

    useEffect(() => {
        loadUrlList();
    }, []);

    async function loadUrlList() {
        setShowPlayer(false);
        const response = await api.get("/videos");
        setUrlList(response.data);
    }

    function openVideoStream(url) {
        setUrl(url);
        setShowPlayer(true);
    }

    async function saveMovies(){
        console.log(JSON.stringify(fileUpload));
        debugger;
        await fileUpload.map((file) =>{
            const response = api.post(`/videos/`, file);
            debugger;
            console.log(response);
        })
    };

    async function deleteVideo(id) {
        const response = await api.delete(`/videos/${id}`);
        const newUrls = urlList.filter((url) => {
            return url._id !== id;
        });

        setUrlList(newUrls);
    }

    return (
        <>
            {showPlayer ? (
                <>
                    <FaWindowClose
                        size={30}
                        onClick={() => setShowPlayer(false)}
                        color="#E02041"
                    />
                    <PlayerControlExample url={url} />
                </>
            ) : (
                <>
                    <ButtonUpload
                        fileUpload={fileUpload}
                        setFileUpload={setFileUpload}
                    />
                    <button onClick={() => saveMovies()}>Salvar</button>
                    <ul>
                        {urlList.map((urlApi) => {
                            return (
                                <li key={urlApi.name}>
                                    <label
                                        onClick={() =>
                                            openVideoStream(urlApi.url)
                                        }
                                    >
                                        {urlApi.name}
                                    </label>
                                    <AiFillDelete
                                        size={30}
                                        onClick={() => deleteVideo(urlApi._id)}
                                        color="#E02041"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </>
    );
}
