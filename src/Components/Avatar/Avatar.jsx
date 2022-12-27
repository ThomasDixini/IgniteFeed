import styles from './styles.module.css';

export function Avatar({src, hasBorder = true}) {
    return(
        <img className={hasBorder ? styles.avatar : styles.avatarNoBorder } src={src} alt="Foto do Perfil"/>
    );
}