import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RenderCard from "../movies/RenderCard";

export default function DetailPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error))
    };

    useEffect(fetchMovie, []);

    return (
        <div className="row mt-5">
            <div className="col">
                <RenderCard movie={movie} />
            </div>
        </div>
    )
}