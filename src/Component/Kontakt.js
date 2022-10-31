export default function Kontakt() {

    const adresa = <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46446.48774771767!2d21.85833982045913!3d43.31623795791537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1666804917810!5m2!1ssr!2srs" width="350" height="270" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="mapa"></iframe>

    return (
        <div className="kontakt">
            <h3>Možemo da stupimo u kontakt lično,  preko telefona  ili putem mejla.</h3><br />
            <h4><em><strong>Izbor je uvek na Vama.</strong></em></h4>
            <br />
            <div className="kontakt-telo">
                <article className="kontakt-mapa">{adresa}
                    <p> <br /> <i> ulica i broj, grad </i> <br />
                        <span> Tel:&nbsp; </span> <a href="tel:Broj telefona"> <i> +broj telefona </i> </a> </p>
                </article>
                <article className="kontakt-forma">
                    <form className="kontakt-forma-mejl">        {/* Nije dodata funkcija ovoj formi. Nodemailer ili EmailJS  */}
                        <input type="text" name="name" placeholder="Enter Your full name" required />
                        <input type="email" name="mail" placeholder="Enter Your email" required />
                        <textarea name="message" cols="30" rows="10" placeholder="Please. Send us your question." maxLength={1000}></textarea>
                        <button type="submit">Send message</button>
                    </form>
                </article>
            </div>
        </div>
    )
}