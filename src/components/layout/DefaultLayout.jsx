import { Outlet } from "react-router";
import MainNav from "./MainNav";

export default function DefaultLayout() {

    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="container">
                <Outlet />
            </main>
        </div>
    )

}