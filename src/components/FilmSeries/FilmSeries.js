import styles from '../FilmSeries/FilmSeries.module.css';
import axios from '../../axios';
import {useEffect, useState} from 'react';
import { useHref } from 'react-router';

export default function FilmSeries(){

    const [articles, setArticles] = useState([])

    useEffect(() =>{
        axios.get('/articles?isClip=false&arrayValues]')
        .then(res =>{
            setArticles(res.data)
        })
    },[]) 
    return(
        <div id="top">
            <div className={styles.FilmSeriesContainer}>
                <div className={styles.FilmSeriesTitle}>
                    Musique, <br></br>
                    courts métrages <br></br>
                    et séries
                </div>
                <div className={styles.FilmSeriesCardsContainer}>
                    {articles && articles.map((article) =>{
                        return( 
                            <div className={styles.card} key={article._id}>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardText}>
                                        <div className={styles.artist}>
                                            {article.artist}
                                        </div>
                                        <div className={styles.TitleDurationDate}>
                                            <div className={styles.title}>
                                                {article.title}
                                            </div>
                                            <div className={styles.durration}>
                                                {article.durration}
                                            </div>
                                            <div className={styles.date}>
                                                {article.date}
                                            </div>
                                        </div>
                                        <div className={styles.credits}>
                                            {article.credits}
                                        </div>
                                        <p> Et +</p>
                                    </div>
                                    <div className={styles.more}>
                                     
                                            <p>
                                                En savoir plus
                                            </p>
                                        
                                    </div>
                                </div>
                            </div> 
                            
                        )
                    })}
                </div>
            </div>
        </div>
        )
        
}

