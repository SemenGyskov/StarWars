import React from "react";
import { useState, useEffect } from "react";

const People = (props) => {
    const[hero,setHero]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => setHero(data.results))
        .catch(error => console.error(error));
    }, [])
return(
    <div>
        {hero.map(hero=>(
            <div>
            <h1>Имя персонажа: {hero.name}</h1>
            <p>Рост: {hero.height}</p>
            <p>Масса: {hero.mass}</p>
            <p>Подробнее на: <a href={hero.url}>{hero.url}</a></p>
            </div>
        ))}
    </div>
)
};
export default People;