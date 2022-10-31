import { Link } from "react-router-dom";
import Menjačnica from "./Menjačnica";

export default function Header() {
    const naslov = "Knjigovodstvena agencija"

    return (
        <>
            <div className="header">
                <p className="naslov">{naslov}</p>
                <div className='navbar'>
                    <ul >
                        <li><Link to={""}>Početna strana</Link></li>
                        <li><Link to={"agencija"}>O agenciji </Link></li>
                        <li><Link to={"Usluge"}>Usluge </Link></li>
                        <li><Link to={"Kalkulator"}>Kalkulator </Link></li>
                        <li><Link to={"Kontakt"}>Kontakt </Link></li>
                    </ul>
                </div>
            </div>
            <div className="naslov2">
                <div className="naslov2-menjačnica"><Menjačnica /></div>
            </div>
        </>
    )
}