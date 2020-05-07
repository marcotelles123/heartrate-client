import React, { useState, useEffect } from 'react';
import api from './../../service/api';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from "react-toastify";


function FormList() {
    const [rates, setRates] = useState([]);
    //const classes = useStyles();

    async function loadRates() {
        const response = await api.get('/rates');
        setRates(response.data);
    }
    
    useEffect(() => {
        loadRates();
    }, []);

    function ShowToastSuccess(message) {
        toast(message);
    }

    function ShowToastError(message) {
        toast(message, {
            className: 'Error-Toast'
        });
    }


    async function deleteRow(e) {
        await api.delete(`/rates/${e._id}`).then(response => {
            if (response.status === 200) {
                ShowToastSuccess("Deletado com sucesso!!!");
                loadRates();
            } else {
                ShowToastError("ERRO!")
                console.log(response);
            }
        }).catch(error => {
            ShowToastError("ERRO!")
            console.log(error);
        });
    }

    function formatDate(date) {
        var formattedDate = date.replace("T", " ");
        formattedDate = formattedDate.replace("Z", " ");

        return formattedDate;
    }

    var table = <table className="ui celled table">
        <thead className="">
            <tr className="">
                <th className="">Pressão Sistólica</th>
                <th className="">Pressão Diaistólica</th>
                <th className="">Data</th>
                <th className="columnButton"> </th>
            </tr>
        </thead>
        {rates.map(dev => {
            return <tbody className="" key={dev._id}>
                <tr key={dev._id} className={dev.rates[0] > 13 || dev.rates[1] > 9 ? "highPressure" : ""}>
                    <td className="">{dev.rates[0]}</td>
                    <td className="">{dev.rates[1]}</td>
                    <td className="">{formatDate(dev.date)}</td>
                    <td className="columnButton" onClick={() => deleteRow(dev)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </td>
                </tr>
            </tbody>
        }

        )}
    </table>
    return (
        <div id="formList">
            {table}
            <ToastContainer />
        </div>
    );
}

export default FormList;