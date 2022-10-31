import { useState, useEffect, } from "react"
import eu from "../img_kurs/eu.png";
import ch from "../img_kurs/ch.png";
import us from "../img_kurs/us.png";
import gb from "../img_kurs/gb.png";


export default function Menjačnica() {
    const [data, setData] = useState('');
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/json');
            const json = await response.json();
            setData(json.result);
        }
        fetchData();
    }, []);

    let kurs = data;
    let usd = kurs.usd;
    let chf = kurs.chf;
    let gbp = kurs.gbp;
    let eur = kurs.eur;

    let datum = data.date;

    let euZastava = <img src={eu} alt="zastava" />;
    let chZastava = <img src={ch} alt="zastava" />;
    let usZastava = <img src={us} alt="zastava" />;
    let gbZastava = <img src={gb} alt="zastava" />;



    return (
        <div className="menjačnica">
            <table className="menjačnica-tabela">
                <caption className="menjačnica-tabela-caption"><b>Kursna lista na dan {datum}.</b></caption>
                <thead className="menjačnica-tabela-head">
                    <tr>
                        <th>&nbsp;</th>
                        <th> Kupovni </th>
                        <th> Srednji </th>
                        <th> Prodajni </th>
                    </tr>
                </thead>
                <tbody className="menjačnica-tabela-body">
                    <tr>
                        <td> {euZastava} EUR</td>
                        <td> {eur && eur.kup}  </td>
                        <td> {eur && eur.sre} </td>
                        <td> {eur && eur.pro} </td>
                    </tr>
                    <tr>
                        <td> {chZastava} CHF</td>
                        <td> {eur && chf.kup}  </td>
                        <td> {eur && chf.sre} </td>
                        <td> {eur && chf.pro} </td>
                    </tr>
                    <tr>
                        <td> {usZastava} USD</td>
                        <td> {eur && usd.kup}  </td>
                        <td> {eur && usd.sre} </td>
                        <td> {eur && usd.pro} </td>
                    </tr>
                    <tr>
                        <td> {gbZastava} GBP</td>
                        <td> {eur && gbp.kup}  </td>
                        <td> {eur && gbp.sre} </td>
                        <td> {eur && gbp.pro} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}