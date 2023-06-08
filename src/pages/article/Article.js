import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from '../../axios';
import styles from '../article/Article.module.css';

export default function Article(){

    const {id} = useParams();

    const [article, setArticle] = useState([])

    useEffect(() =>{
        axios.get(`/article/${id}`)
        .then(res =>{
            setArticle(res.data)
        })
    },[id]) 



    return(
        
    <div className={styles.articlePageContainer}>
        <div className={styles.mainInfos}>
            <div className={styles.mainInfosTop}>
                <div className={styles.titleTop}>
                    <div className={styles.title}>
                        {article.title}
                    </div>
                    <div className={styles.numberTop}>
                        N°{article.numberTop}
                    </div>
                </div>
                <div className={styles.artist}>
                    {article.artist}
                </div>
            </div>
            <div className={styles.mainInfosBottom}>
                <p>
                    DURÉE : {article.durration}
                </p>
                <p>
                    ALBUM : {article.album}
                </p>
                <p>
                    DATE : {article.date}
                </p>
                
            </div>

        </div>

        {(article && article.miniature ) &&
             <img alt="miniature" className={styles.miniature} src={require(`../../../public/images/${article.miniature.fileName}`)}/>
        }

        <div className={styles.infosAndArticleContainer}>
            <div className={styles.infosAndArticle}>
                <div className={styles.credits}>
                    <p>
                        CRÉDITS
                    </p>
                    <p className={styles.creditsContent}>
                        {article.credits}
                    </p>
                </div>

                <div className={styles.aboutClip}>
                    <p>
                        À PROPOS DU CLIP
                    </p>
                    <p className={styles.aboutClipContent}>
                        {article.aboutClip}
                    </p>
                </div>

                <div className={styles.aboutArtist}>
                    <p>
                        À PROPOS DE L'ARTISTE
                    </p>
                    <p className={styles.aboutArtistContent}>
                        {article.aboutArtist}
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.imagesContainer}>
            <h4>
                Plans favoris
            </h4>
            <div className={styles.images}>
                {(article && article.images) && 
                    <div>
                        <div>
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[0].fileName}`)}/>
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[1].fileName}`)}/>
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[2].fileName}`)}/>
                        </div>
                        <div>    
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[3].fileName}`)}/>
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[4].fileName}`)}/>
                            <img className={styles.image} src={require(`../../../public/images/articlesImages/${article.images[5].fileName}`)}/>
                        </div>
                    </div>
                }
            </div>
        </div>
        <div className={styles.commentaryContainer}>
            <div className={styles.commentary}> 
                <div className={styles.commentary1}>
                    <div>
                        <p className={styles.nameDate}>
                            <p className={styles.userName}>
                                @Askemanden
                            </p>
                            <p className={styles.date}>
                                Janvier 2023
                            </p>
                        </p>
                        <p className={styles.textCommentary}>
                            This is the Kendrick album that makes me the most emotional. 
                            I have cried to Auntie Diaries and Mother I Sober many times. 
                            It’s very sad to see so many people writing the album off as 
                            simply “worse” than some of his previous projects. Thank you for Mr. 
                            Morale and The Big Steppers, Kendrick!
                        </p>

                    </div>
                </div>    
                <div className={styles.commentary2}>
                    <p className={styles.nameDate}>
                        <p className={styles.userName}>
                            @Mandersen5799
                        </p>
                        <p className={styles.date}>
                            Mars 2023
                        </p>
                    </p>
                        <p className={styles.textCommentary}>
                            It’s not very often that I feel grateful for the times I’ve been born 
                            and raised into but I’m truly grateful that I’m alive to experience this 
                            man’s career and his stages of growth as an artist and as a fellow human 
                            being Kendrick is an artist that will be discussed decades after his time 
                            is over and I can say with pride that I was alive to experience it all 🙏🏻
                        </p>
                </div>  
                <div className={styles.commentary3}>
                    <p className={styles.nameDate}>
                        <p className={styles.userName}>
                            @Askemanden
                        </p>
                        <p className={styles.date}>
                            Janvier 2023
                        </p>
                    </p>
                    <p className={styles.textCommentary}>
                        This is the Kendrick album that makes me the most emotional. 
                        I have cried to Auntie Diaries and Mother I Sober many times. 
                        It’s very sad to see so many people writing the album off as 
                        simply “worse” than some of his previous projects. Thank you for Mr. 
                        Morale and The Big Steppers, Kendrick!
                    </p>
                </div>  
            </div>
            <p className={styles.youtubeCom}> 
                Commentaires Youtube 
            </p>
            
        </div>
    </div>

    )
}