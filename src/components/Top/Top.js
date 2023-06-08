import styles from '../Top/Top.module.css';
import axios from '../../axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


export default function Top(){

    const [articles, setArticles] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() =>{
        axios.get('/articles?isClip=true&endAt=10')
        .then(res =>{
            setArticles(res.data)
        })
    },[]) 




    return(
        
        <div className={styles.topContainer}>
            <div className={styles.topCard}>
                <div className={styles.topTitleText}>
                    <h2>
                        Top 10
                    </h2>
                
                    <p>
                        clips 2022
                    </p>
                </div>
              
                {articles && articles.slice(0, showAll ? articles.length : 3).map((article) =>{
                    return(
                        <Link to={`/article/${article._id}`} className={styles.topList} key={article._id}>
                            <div className={styles.numberTop}>
                                {article.numberTop+' '}
                            </div>
                            <div className={styles.title}>
                                {article.title+' '}
                            </div>
                            <div className={styles.artist}>
                                {' - '+article.artist}
                            </div>
                        </Link>
                    )
                })}
                <div onClick={() => setShowAll(!showAll)}>
                    <p>
                        Voir {showAll ? 'Moins' : 'Plus'}
                    </p>
                </div>
            </div>
        </div>
       
    )
    
}

