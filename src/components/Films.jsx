import React from "react";
import { useState, useEffect } from "react";

export default function Films(){
    const[Films,setFilms]=useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/films/")
        .then(response => response.json())
        .then(data => setFilms(data.results))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {Films.map(film=>(
            <div>
            <h1>Название Фильма: {film.title}</h1>
            <p>Продюсер: {film.producer}</p>
            <p>Дата релиза: {film.release_date}</p>
            <p>Подробнее на: <a href={film.url}>{film.url}</a></p>
            </div>
        ))}
    </div>
    )
}