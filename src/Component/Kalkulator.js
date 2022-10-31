import { useEffect, useState } from "react";

export default function Kalkulator() {

    const [data, setData] = useState(null);

    const [bruto, setBruto] = useState(' ');

    useEffect(() => {
        setBruto(() => {
            return (Math.round((data - 1930) / 0.701))
        })
    }, [data]);

    const [osnovicaZaPorez, setOsnovicaZaPorez] = useState(' ');

    useEffect(() => {
        setOsnovicaZaPorez(() => {
            return (bruto - 19300)
        })
    }, [bruto])

    return (
        <>
            <div className="kalkulator-tekst">Poštovani, kalkulator je samo informativnog karaktera. Za tačan obračun zarade možete nas uvek kontaktirati.</div>
            <div className="kalkulator">
                <table className="kalkulator-tabela" >
                    <caption className="kalkulator-caption">
                        Kalkulator troškova zarade
                    </caption>
                    <thead>
                        <tr>
                            <th>1. Unesite neto vrednost</th>
                            <th><input type="tel"
                                name="netoZarada"
                                onChange={(event) => setData(event.target.value)}
                                autoComplete="off"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2. Bruto zarada</td>
                            <td><input type="tel" name="brutoZarada"
                                placeholder="(1 - 1.930) / 0.701"
                                readOnly value={(bruto > 0) ? bruto : '(stavka 1 - 1930) / 0.701'}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>3. Poresko oslobođenje</td>
                            <td><input type="tel" name="poreskoOslobođenje" readOnly value="19.300" /></td>
                        </tr>
                        <tr>
                            <td>4. Osnovica za porez</td>
                            <td><input type="tel" name="osnovicaZaDoprinose"
                                readOnly value={(osnovicaZaPorez > 0) ? osnovicaZaPorez : 'stavka 2 - stavka 3'}
                                placeholder="2-3" />
                            </td>
                        </tr>
                        <tr>
                            <td>5. Porez 10%</td>
                            <td><input type="tel" id="porez" name="porez"
                                placeholder="2 * 10%"
                                readOnly value={(osnovicaZaPorez > 0) ? (osnovicaZaPorez * 0.10) : 'stavka 2 * 10%'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>6. Osnovica za doprinose</td>
                            <td><input type="tel" id="osnovicaZaDoprinose" name="osnovicaZaDoprinose" placeholder="2"
                                readOnly value={(bruto > 0) ? bruto : 'Bruto zarada'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>7. Doprinosi na teret zaposlenog</td>
                            <td><input type="tel" name="doprinosiZaposleni"
                                readOnly value={(bruto > 0) ? (Math.round((bruto * 0.14) + (bruto * 0.0515) + (bruto * 0.0075))) : ' '}/>
                            </td>
                        </tr>
                        <tr>
                            <td>8. Doprinosi na teret poslodavca</td>
                            <td><input type="tel" name="doprinosiPoslodavac"
                                placeholder="8_a + 8_b" className="doprinosiPoslodavac"
                                readOnly value={(bruto > 0) ? (Math.round((bruto * 0.11) + (bruto * 0.0515))) : ' '}/>
                            </td>
                        </tr>
                        <tr>
                            <td>9. Ukupan trošak zarade</td>
                            <td><input type="tel" name="ukupnaTrošakZarade"
                                readOnly value={(bruto > 0) ? (Math.round((bruto * 0.11) + (bruto * 0.0515) + bruto)) : 'stavka 2 + stavka 8'}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}