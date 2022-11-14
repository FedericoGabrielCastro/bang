import { GiCowboyHolster , GiCow, GiCowboyBoot} from "react-icons/gi"
import { FaHatCowboySide } from "react-icons/fa"
import { Link } from "react-router-dom"

export const LobbyOptions = () => {

    const lobbyOptionsdata = [
        {icon: GiCowboyHolster, text: "Partida rapida", link: "/lobby" },
        {icon: FaHatCowboySide, text: "Crear partida", link: "/lobby" },
        {icon: GiCow, text: "Como jugar", link: "/lobby" },
        {icon: GiCowboyBoot, text: "Configuracion", link: "/lobby" }
    ]

    return (
        <div className="lobbyOptions">
            {
                lobbyOptionsdata.map((data, index) => {
                    return (
                        <Link to={data.link} key={index} className="lobbyOptions__optionCard">
                            <data.icon />
                            <p>{data.text}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}
