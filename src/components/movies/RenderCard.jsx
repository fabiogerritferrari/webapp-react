import { Link } from "react-router";

export default function RenderCard({ movie }) {

    const { id, title, director, genre, release_year, abstract, image, created_at, updated_at } = movie;

    return (
        <div className="card" key={id}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body bg-warning">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{abstract}</p>
                <p className="card-text">Directed by: {director}</p>
                <p className="card-text">Genre: {genre}</p>
                <p className="card-text">Release in: {release_year}</p>
                <Link href="#" className="btn btn-primary" to={`/movies/${id}`}>Detail</Link>
            </div>
        </div>
    )

}