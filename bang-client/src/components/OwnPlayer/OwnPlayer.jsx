import { CharacterCard } from "@components";

export const OwnPlayer = () => {
    const harcodeHandCard = [
        { card: "" },
        { card: "" },
        { card: "" },
        { card: "" },
        // {card: ""},
        // {card: ""},
        // {card: ""},
        // {card: ""},
    ];

    return (
        <>
            <div className="ownRol">
                <span className="ownRol__cardRol" />
            </div>
            <div className="ownCards">
                {harcodeHandCard.map((card, index) => {
                    return <span className="ownCards__card" key={index} />;
                })}
            </div>
            <div className="ownCharacter">
                <CharacterCard />
            </div>
        </>
    );
};
