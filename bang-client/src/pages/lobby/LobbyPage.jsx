import { Outlet } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export const LobbyPage = () => {
    return (
        <div className="lobby">
            <div className="lobby__userMenu">
                <BiLogOut />
                <h3> Federico </h3>
            </div>
            <Outlet />
        </div>
    );
};
