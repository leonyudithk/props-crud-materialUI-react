import React, { useEffect, useState } from 'react';
import AddCards from './AddCards';
import MediaCard from './CardsMUI';
import ResponsiveDrawer from './Menus';

const url ='https://api-clases.herokuapp.com/cards/'

const Home = () => {

    const [getCards, setGetcards] = useState([])

 const cargarDatos = async()=>{
     const resp = await fetch(url)
     const data =await resp.json()
     console.log(data)
     setGetcards(data)
    }
    
    useEffect(()=>{
        cargarDatos()
    },[])


    return (
        <div>
            <AddCards />
            <ResponsiveDrawer/>
            <MediaCard  data={getCards}/>
  
        </div>
    );
};

export default Home;