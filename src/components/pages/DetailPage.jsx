import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RenderCard from "../movies/RenderCard";
import RenderReviews from "../movies/RenderReviews";

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
        <div className="row mt-5 d-flex flex-column gap-4">
            <div className="col">
                <RenderCard movie={movie} />
            </div>
            <div className="col d-flex flex-column gap-2">
                {movie.reviews && (movie.reviews).map((review) => {
                    return (
                        <RenderReviews review={review} key={review.id} />
                    )
                })}
            </div>
        </div>
    )
}