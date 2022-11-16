import { GiCardRandom } from "react-icons/gi";

export const StatusPlayersCard = ({
    totalBullets,
    cardHand,
    rol,
    timeTurn,
    name,
}) => {
    return (
        <div className="statusPlayer">
            <div className="statusPlayer__time">{timeTurn}</div>
            <div className="statusPlayer__top">
                <p>
                    <b>{name}</b>
                </p>
                <div className="statusPlayer__top__role" />
            </div>
            <div className="statusPlayer__bottom">
                <div className="statusPlayer__bottom__cards">
                    <GiCardRandom />
                    <p>x {cardHand}</p>
                </div>
                <div className="statusPlayer__bottom__bullets">
                    <div className="statusPlayer__bottom__bullets__bullet" />
                    <div className="statusPlayer__bottom__bullets__bullet" />
                    <div className="statusPlayer__bottom__bullets__bullet" />
                    <div className="statusPlayer__bottom__bullets__bullet" />
                    <div className="statusPlayer__bottom__bullets__bullet" />
                </div>
            </div>
        </div>
    );
};
