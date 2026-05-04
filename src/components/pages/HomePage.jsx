import { useEffect, useState } from "react";
import axios from "axios";
import RenderCard from "../movies/RenderCard";

export default function Homepage() {

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then((res) => setMovies(res.data))
            .catch((error) => console.log(error))
    };

    useEffect(fetchMovies, []);


    return (
        <>
            <div className="row mt-5">
                <h1 className="text-warning">The Boolean's Film !</h1>
            </div>
            <div className="row mt-5">
                {movies.map((movie) => {
                    return (
                        <div className="col" key={movie.id}>
                            <RenderCard movie={movie} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}