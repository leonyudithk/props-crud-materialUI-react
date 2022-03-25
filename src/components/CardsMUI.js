import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

const url2 = 'https://api-clases.herokuapp.com/cards/'

export default function MediaCard({ data }) {
  console.table(data)

  //---------eliminar------------------//
  const eliminarCards = async (id) => {
    console.log("el id es" + id)
    console.log("el id es" + url2 + id)
    await fetch(url2 + id, { method: 'DELETE' })

  }

  //----------deatils--------------------//
  const detalleCards = async (id, nombre, url, descripcion) => {

    console.log("el id de detalle" + url2 + id)

    Swal.fire({

      title: `${nombre}`,
      text: `${descripcion}`,
      footer: `${id}`,
      imageUrl: `${url}`,
      imageHeight: 300,
      imageAlt: 'A tall image',

      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  return (
    <center>
      <Card sx={{ maxWidth: 345 }}>
        <h1>Listar Platos</h1>
        {
          data.map((pintar) => (
            <div key={pintar.id} margin='20'>
              <CardMedia
                component="img"
                height="140"
                image={pintar.url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pintar.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pintar.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => detalleCards(pintar.id, pintar.nombre, pintar.url, pintar.descripcion)}>Detail</Button>
                <Button size="small" onClick={() => eliminarCards(pintar.id)}>Delete</Button>
              </CardActions>
            </div>
          ))
        }


      </Card>



    </center>
  );
}














