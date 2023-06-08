import styles from '../HomeImage/HomeImage.module.css';

export default function HomeImage(){
    console.log(styles)
    return(
        <div>
            <div className={styles.homeImageContainer}>
                <div className={styles.homeImage}>  
                </div>
                <div className={styles.titleHomeImage}>
                    <h1>
                    Titre Beau
                    </h1>
                    
                </div>
                <div className={styles.textExplanations}>
                    <p>
                        Aenean ut et cursus morbi est enim scelerisque pretium purus. 
                        Tellus vitae arcu bibendum eget semper risus diam id. 
                        Placerat sit et ac id nulla nisl nibh nisl fermentum. 
                    </p>
                </div>
            </div>
        </div>
    )
}

