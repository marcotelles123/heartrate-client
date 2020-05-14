import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./ButtonUpload.css";

export default function ButtonUpload(props) {
    const fileInput = useRef(null);
    const fileUpload = props.fileUpload;
    const setFileUpload = props.setFileUpload;

    const handleClick = () => {
        fileInput.current.click();
    };



    var handleFileChange = function (e) {
        debugger;
        var videos =[];
        for (var i = 0; i < e.target.files.length; i++) {
            debugger;
            videos.push({
                name: e.target.files[i].name,
                url: `http://marcotelles123.com.br/${e.target.files[i].name}`,
            });
         }
         setFileUpload(videos);
        Array.from(e.target.files).forEach((element) => {



            // fileToBase64(element).then((result) => {
            //     setFileUpload([...fileUpload, {name: result}]);
            // });
        });
    };

    var fileToBase64 = (input) => {
        debugger;
        return new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = function (event) {
                resolve(event.target.result);
            };
            reader.readAsDataURL(input);
        });
    };

    return (
        <>
            <input
                type="file"
                multiple
                onChange={(e) => handleFileChange(e)}
                ref={fileInput}
            />
            <button onClick={() => handleClick()}>
                <FaCloudUploadAlt size={45} />
            </button>

        </>
    );
}
