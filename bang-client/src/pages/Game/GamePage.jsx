import { StatusPlayersCard, Deck, OwnPlayer } from "@components";

export const GamePage = () => {
    const harcodeUserActive = [
        {
            name: "Federico",
            rol: "sheriff",
            totalBullets: 5,
            cardHand: 4,
            timeTurn: "60s",
        },
        {
            name: "Fede",
            rol: "sheriff",
            totalBullets: 4,
            cardHand: 4,
            timeTurn: "60s",
        },
        {
            name: "Fed",
            rol: "sheriff",
            totalBullets: 3,
            cardHand: 3,
            timeTurn: "60s",
        },
        {
            name: "Fedco",
            rol: "sheriff",
            totalBullets: 4,
            cardHand: 0,
            timeTurn: "60s",
        },
        {
            name: "Federico",
            rol: "sheriff",
            totalBullets: 4,
            cardHand: 4,
            timeTurn: "60s",
        },
        {
            name: "Fed",
            rol: "sheriff",
            totalBullets: 3,
            cardHand: 5,
            timeTurn: "60s",
        },
        {
            name: "Federico",
            rol: "sheriff",
            totalBullets: 3,
            cardHand: 4,
            timeTurn: "60s",
        },
    ];
    3;
    return (
        <article className="gamePage">
            <section className="gamePage__game">
                <div className="gamePage__game__topPlayer">asd</div>
                <div className="gamePage__game__asidePlayer">
                    <aside className="gamePage__game__asidePlayer__leftPlayer">
                        left
                    </aside>
                    <section className="gamePage__game__asidePlayer__deck">
                        <Deck />
                    </section>
                    <aside className="gamePage__game__asidePlayer__rigthPlayer">
                        right
                    </aside>
                </div>
                <footer className="gamePage__game__ownPlayer">
                    <OwnPlayer />
                </footer>
            </section>
            <section className="gamePage__statusPlayers">
                {harcodeUserActive.map((data, index) => {
                    return (
                        <div key={index}>
                            <StatusPlayersCard
                                totalBullets={data.totalBullets}
                                name={data.name}
                                rol={data.rol}
                                cardHand={data.cardHand}
                                timeTurn={data.timeTurn}
                            />
                        </div>
                    );
                })}
            </section>
        </article>
    );
};
