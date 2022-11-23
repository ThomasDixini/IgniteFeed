import styles from './styles.module.css';

export function Post(){
    return(
        <article className={styles.articleContainer}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <img src="" 
                    alt="Foto do Perfil"
                    className={styles.avatar}
                    />
                    <strong> Diego Fernandes </strong>
                    <span> Web Developer </span>
                </div>
                <span>
                    Publicado a 1h
                </span>
            </header>
            <p>
                Fala galeraa 👋 <br/><br/>

                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 <br/><br/>

                <a hrfe=""> 👉 jane.design/doctorcare </a> <br/>

                <a hrfe=""> #novoprojeto </a> <a href=""> #nlw </a> <a href=""> #rocketseat </a> 
            </p>
            <footer className={styles.footer}>
                <strong> Deixe seu feedback </strong>
                <textarea name="comentario" id="comentario" placeholder="Escreva um comentário..."/>
                <button type="submit"> Publicar </button>
            </footer>
        </article>
    );
}