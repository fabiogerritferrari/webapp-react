import { Link } from "react-router";

export default function MainNav() {

    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bolder text-dark" href="#" to='/'>Boolean's Films</Link>
            </div>
        </nav>
    )

}