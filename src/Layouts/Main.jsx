import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";


const Main = () => {
    return (
        <main>
            <Nav></Nav>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;