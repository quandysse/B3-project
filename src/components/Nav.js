import {Link} from 'react-router-dom';
import styles from '../components/Nav.module.css';

export default function Nav(){

    return(
        <div id="top">
            <div className={styles.nav}>
            <ul>
                <li><Link to='/'> Accueil </Link></li>
                <li><Link to='/about'> À propos </Link></li>
            </ul>
                
                
            </div>
        </div>
    )
    
}