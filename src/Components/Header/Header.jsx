import appName from '../../assets/appName.svg'
import styles from './styles.module.css';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <img src={appName} alt="Logotipo" />
        </header>
    );
}