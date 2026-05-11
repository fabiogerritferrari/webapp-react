import { StarRating } from "react-flexible-star-rating";

export default function RenderReviews({ review }) {

    const { id, movie_id, name, vote, text, created_at, updated_at } = review;

    return (
        <div className="card" key={id}>
            <div className="card-header bg-dark text-white">
                <StarRating initialRating={vote} isReadOnly='true' dimension={10} />
            </div>
            <div className="card-body bg-warning">
                <figure>
                    <blockquote className="blockquote">
                        <p>{text}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {name}
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}