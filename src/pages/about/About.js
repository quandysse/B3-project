import styles from '../about/About.module.css';

export default function About(){

    return(
        <div>
            <div className={styles.aboutContainer}>
                <div className={styles.titleAbout}>
                    <p>
                        À propos
                    </p>
                </div>
                <div className={styles.logoText}>
                    <div className={styles.logo}>

                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            <p>
                                Un media qui balblate sur la musique et la la vidéo
                            </p>
                        </div>
                        <div className={styles.paragraph}>
                            <p>
                            Lorem ipsum dolor sit amet consectetur. Feugiat feugiat pellentesque 
                            rutrum sit quam. Morbi tortor vitae ultrices adipiscing tincidunt 
                            libero vel pharetra elit. Volutpat nulla lacus elit nulla scelerisque. 
                            Diam eget ac donec non cras quis et faucibus ultrices. Sit massa eu ut 
                            feugiat nunc vitae tortor. 
                            Tellus ultrices viverra eget laoreet. Consectetur maecenas varius est 
                            viverra. Malesuada a est vivamus iaculis volutpat vel. Donec enim tristique sit et euismod elit.
                            Hac sit ut in maecenas purus eu lacus cursus. Tristique eu porttitor 
                            bibendum maecenas at odio. Nisi ut porta in sollicitudin fermentum donec 
                            vel mauris. Lectus cras luctus integer ultrices tristique lorem fusce. 
                            Amet sit ultricies tempor enim volutpat vitae eget quam at. In ipsum 
                            elementum nisl quis arcu nunc viverra. Egestas velit integer at dolor 
                            leo sagittis enim.
                            </p>
                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>
    )
    
}