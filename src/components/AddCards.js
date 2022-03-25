import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const url2 = 'https://api-clases.herokuapp.com/cards/'

export default function ComposedTextField() {

    const [agregar, setAgregar] = React.useState({
        url: '',
        nombre: '',
        descripcion: '',

    });

    const { url, nombre, descripcion } = agregar;

    const handleChange = ({ target }) => {
        setAgregar({
            ...agregar,
            [target.name]: [target.value],

        });

        console.log(target.value)
        console.log(target)
        console.log(agregar)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('holis')
    }
    const AgregarTarea = () => {

        fetch(url2, {
            method: 'POST',
            body: JSON.stringify(agregar),
            headers:
            {
                'Content-Type': 'application/json; charset=utf-8'
            }

        })
    }

    return (
        <center>
            <h1>Agregar Platos</h1>
            <form className="form-group" onSubmit={handleSubmit} >
                <FormControl>
                    <Input
                        type="text"
                        className="form-control "
                        placeholder="Url de la Imagen"
                        name="url"
                        value={url}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        className="form-control mt-2"
                        name="nombre"
                        autoComplete="off"
                        placeholder="Nombre del Plato"
                        value={nombre}
                        onChange={handleChange}
                    />

                    <Input
                        className="form-control mt-2"
                        autoComplete="off"
                        placeholder="Descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        endIcon={<SendIcon />}
                        variant="contained"
                        onClick={() => AgregarTarea()}>
                        Guardar
                    </Button>
                </FormControl>

            </form>
        </center>
    );
}


