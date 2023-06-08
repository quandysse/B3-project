import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Footer/Footer.module.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){

    return(
        <div>
            <div className={styles.footerContainerAll}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerContactCard}>

                        <div className={styles.footerContactGif}>
                            
                        </div>

                        <div className={styles.footerContactNewsletter}>
                            <p>
                            Newletter
                            </p>
                            <h5>
                                Soyez les premiers informés des dernières nouveautés musique !
                            </h5>

                            <div className={styles.email}>
                                <label for="email"><p>Email :</p></label>
                                <input type="email" id="email"
                                pattern=".+@globex\.com" size="30" required/>
                            </div>

                            <div className={styles.NameSubscribe}>
                                <div className={styles.name}>
                                    <label for="name"><p>Prénom Nom :</p></label>
                                    <input type="name" id="name"
                                    pattern="Jean Paul" size="30" required/>
                                </div>
                                <div className={styles.subscribe}>
                                    <button>M'abonner</button>
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <div className={styles.footerInformations}>
                        <div className={styles.infos}>
                            <p>
                                Musique, vidéo et passion
                            </p>
                            <a href="#top">
                                <p>
                                    Haut de page
                                </p>

                            </a>

                        </div>
                        <div className={styles.addressSocials}>
                            <div className={styles.addressNumber}>
                                <p className={styles.address}>
                                    5 Av. Anatole France
                                    75007 Paris<br></br>
                                    France<br></br>
                                    +33 6 07 06 07 06 
                                </p>
                                <p className={styles.contactBox}>
                                    <p className={styles.contact}>
                                        <a href="mailto:candiceladressemail@gmail.com">
                                            Nous contacter
                                        </a>
                                    </p>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                    
                                </p>
                            </div>
                            <div className={styles.Socials}>
                                <p>
                                    Instagram
                                </p>
                                <p>
                                    © Nom du site 2023
                                </p>
                            </div>
                        </div>
                    
                    
                    </div>

                </div>
            </div>
        </div>
    )
    
}