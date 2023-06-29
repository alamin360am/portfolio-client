import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import ThemeMode from "../Components/Theme/ThemeMode";


const Main = () => {
    return (
        <main>
            <Nav></Nav>
            <Outlet></Outlet>
            <ThemeMode></ThemeMode>
        </main>
    );
};

export default Main;