import styles from '../ThemedArticles/ThemedArticles.module.css';
import {Link} from 'react-router-dom';

export default function ThemedArticles(){

    return(
        <div className={styles.themedArticlesContainer}>
            <div className={styles.titleDescription}>
                <h2>
                    Articles
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. 
                    Tortor velit at nunc pulvinar nibh id platea eu fermentum. 
                    Urna egestas lobortis quis volutpat accumsan.
                </p>
            </div>
            
            <div className={styles.themedArticles}>
                <Link to='/articleIA'>
                    <div className={styles.aiArticle}>
                        <div className={styles.articleTitle}>
                            <h5>
                                Titre AI article sit amet consectetur, sit lectus sit mattis.
                            </h5>
                        </div>
                        <div className={styles.moreInfos}>
                            <p className={styles.tags}>
                                <p>
                                    Intelligence artificielle
                                </p>
                                <p>
                                    Post prod
                                </p>

                            </p>
                            <p className={styles.readTime}>
                                Temps de lecture : 4 min
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to='/article3D'>
                    <div className={styles.threeDArticle}>
                        <div className={styles.articleTitle}>
                            <h5>
                                Article à propos de la 3D.
                            </h5>
                        </div>
                        <div className={styles.moreInfos}>
                            <p className={styles.tags}>
                                <p>
                                    Intelligence artificielle
                                </p>
                                <p>
                                    Post prod
                                </p>

                            </p>
                            <p className={styles.readTime}>
                                Temps de lecture : 4 min
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            
            
        </div>
    )
}