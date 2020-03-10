import React from 'react';
import './../../App.css';
import { makeStyles } from '@bit/mui-org.material-ui.styles'
import FormControl from '@bit/mui-org.material-ui.form-control'
import InputLabel from '@bit/mui-org.material-ui.input-label'
import OutlinedInput from '@bit/mui-org.material-ui.outlined-input'
import Button from './../Button/Button';
import { ToastContainer, toast } from "react-toastify";
import api from './../../service/api';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: '#594a95',
        minWidth: '100%',
        alignItems: 'center',
        padding: '10px',
        height: '100%'
    },
    mainForm: {
        margin: 'auto',
        backgroundColor: '#FFF',
        maxWidth: '200px',
        alignItems: 'center',
        padding: '10px',
        height: '100%'
      },
    
      formControl: {
        margin: '10px',
        backgroundColor: '#FFF'
      },
      inputControl: {
        height: '80px',
      },
}));

function FormAdd() {
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [firstRate, setFirstRate] = React.useState('');
    const [secondRate, setSecondRate] = React.useState('');
    const labelRef = React.useRef(null);
    const classes = useStyles();

    React.useEffect(() => {
        setLabelWidth(labelRef.current.offsetWidth);
    }, []);


    const handleChangeFirstRate = event => {
        setFirstRate(event.target.value);
    };

    const handleChangeSecondRate = event => {
        setSecondRate(event.target.value);
    };

    const handleSubmit = event => {
        createRate()
            .then(response => {
                if (response.status === 200) {
                    ShowToastSuccess("Salvo com sucesso!!!");
                } else {
                    ShowToastError("ERRO!")
                    console.log(response);
                }
            })
            .catch(error => {
                ShowToastError("ERRO!")
                console.log(error);
            });
    };

    function ShowToastSuccess(message) {
        toast(message);
    }

    function ShowToastError(message) {
        toast(message, {
            className: 'Error-Toast'
        });
    }

    async function createRate() {
        var rateCommand = {
            rates: [
                firstRate, secondRate
            ]
        };
        console.log(JSON.stringify(rateCommand));
        var res = await api.post('/rates/', rateCommand);
        return await res;
    }

    return (
        <div id="formAdd" className={classes.mainForm}>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="component-outlined">
                    Pressão Sistólica
          </InputLabel>
                <OutlinedInput
                    className={classes.inputControl}
                    id="component-outlined"
                    value={firstRate}
                    onChange={handleChangeFirstRate}
                    labelWidth={labelWidth}
                    type="number"
                />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel ref={labelRef} htmlFor="component-outlined">
                    Pressão Diastólica
      </InputLabel>
                <OutlinedInput
                    className={classes.inputControl}
                    id="component-outlined"
                    value={secondRate}
                    onChange={handleChangeSecondRate}
                    labelWidth={labelWidth}
                />
            </FormControl>
            <ToastContainer />
            <Button onClick={handleSubmit}>Salvar</Button>
        </div>
    );
}

export default FormAdd;