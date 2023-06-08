import styles from '../SpecialMentions/SpecialMentions.module.css';
import axios from '../../axios';
import {useEffect, useState} from 'react';

export default function SpecialMentions(){

    const [articles, setArticles] = useState([])

    useEffect(() =>{
        axios.get('/articles?startAt=11')
        .then(res =>{
            setArticles(res.data)
        })
    },[]) 

    return(
        <div >
            <div className={styles.SpecialMentionsContainer}>
                <div className={styles.SpecialMentionsLinks}>
                    <h6>
                        Mentions Spéciales
                    </h6>

                    {articles && articles.map((article) =>{
                    return(
                        <div  key={article._id}>
                            <div className={styles.SpecialMentionsLink}>

                                <div className={styles.SpecialMentionsArtist}> 
                                    {article.artist}
                                </div>
                                <div className={styles.SpecialMentionsTitle}>
                                    {article.title}
                                </div>
                                <div className={styles.SpecialMentionsDurration}>
                                    {article.durration}
                                </div>
                                <div className={styles.SpecialMentionsDate}>
                                    {article.date}
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

