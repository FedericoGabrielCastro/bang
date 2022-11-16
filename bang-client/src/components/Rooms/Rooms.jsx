import { CgSandClock } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import avatarImg from "@assets/avatar.png";

export const Rooms = () => {
    const navigate = useNavigate();

    const harcodeRooms = [
        { name: "Nombr ", timeTurn: "1min", players: "7/7" },
        { name: "Nombredel", timeTurn: "15min", players: "7/7" },
        { name: "Nombredel", timeTurn: "1min", players: "7/7" },
        { name: "Nomb", timeTurn: "1min", players: "7/7" },
        { name: "Nomb", timeTurn: "1min", players: "7/7" },
        { name: "Nomb", timeTurn: "1min", players: "7/7" },
        { name: "Nomb", timeTurn: "1min", players: "7/7" },
        { name: "Nomb", timeTurn: "1min", players: "7/7" },
    ];

    const harcodeUsers = [
        { name: "Fede" },
        { name: "Fed" },
        { name: "Federico" },
        { name: "Fede" },
        { name: "Fed" },
        { name: "Federico" },
        { name: "Fede" },
    ];

    const handleStartGame = () => {
        harcodeUsers.length >= 4
            ? navigate("/game")
            : console.log("Empezar partida");
    };

    return (
        <section className="rooms">
            <div className="rooms__games">
                {harcodeRooms.map((room, index) => {
                    return (
                        <div key={index} className="rooms__games__room">
                            <h3> {room.name} </h3>
                            <div className="rooms__games__room__timeTurn">
                                <CgSandClock />
                                <p> {room.timeTurn} </p>
                            </div>
                            <h3> {room.players} </h3>
                        </div>
                    );
                })}
            </div>
            <div className="rooms__players">
                {harcodeUsers.map((user, index) => {
                    return (
                        <div key={index} className="rooms__players__user">
                            <img
                                src={avatarImg}
                                alt="user img"
                                className="rooms__players__user__avatar"
                            />
                            <p className="rooms__players__user__userName">
                                {user.name}
                            </p>
                        </div>
                    );
                })}
                <div className="rooms__players__dataRoom">
                    <button
                        onClick={handleStartGame}
                        className="rooms__players__dataRoom__startRoom"
                    >
                        {harcodeUsers.length}/7
                    </button>
                </div>
            </div>
        </section>
    );
};
