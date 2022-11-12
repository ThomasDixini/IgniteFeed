import styles from './styles.module.css';
import {BsPencilSquare} from 'react-icons/bs'

export function SideBar() {
    return(
        <aside className={styles.asideContainer}>
            <img 
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
            alt="Foto de capa" 
            className={styles.cover} 
            />
            <div className={styles.profile}>
                <img src="https://github.com/ThomasDixini.png" 
                alt="Foto do Perfil"
                className={styles.avatar}
                />
                <strong> Diego Fernandes </strong>
                <span> Web Developer </span>
            </div>
            <footer>
                <a href="#">
                    <BsPencilSquare/> 
                    <p> Editar seu Perfil </p>
                </a>
            </footer>
        </aside>
    );
}