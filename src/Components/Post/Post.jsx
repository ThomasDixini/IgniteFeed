import { Comment } from '../Comment/Comment';
import styles from './styles.module.css';

export function Post(){
    return(
        <article className={styles.articleContainer}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <img src="https://github.com/diego3g.png" 
                    alt="Foto do Perfil"
                    className={styles.avatar}
                    />
                    <div className={styles.userProperties}>
                        <strong> Diego Fernandes </strong>
                        <span> Web Developer </span>
                    </div>
                </div>
                <time title='Publicado a 1h'>
                    Publicado a 1h
                </time>
            </header>
            <p>
                Fala galeraa 👋 <br/><br/>

                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 <br/><br/>

                <a hrfe=""> 👉 jane.design/doctorcare </a> <br/>

                <a hrfe=""> #novoprojeto </a> <a href=""> #nlw </a> <a href=""> #rocketseat </a> 
            </p>
            <form className={styles.formStyle}>
                <strong> Deixe seu feedback </strong>
                <textarea name="comentario" id="comentario" placeholder="Escreva um comentário..."/>
                <footer>
                    <button type="submit"> Publicar </button>
                </footer>
            </form>
            <Comment />
            <Comment />
            <Comment />
        </article>
    );
}