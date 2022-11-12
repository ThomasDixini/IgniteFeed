import styles from './styles.module.css';

export function Post(){
    return(
        <article className={styles.articleContainer}>
            <header>
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
                Fala galeraa 👋

                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                👉 jane.design/doctorcare

                #novoprojeto #nlw #rocketseat
            </p>
            <footer>
                <strong> Deixe seu feedback </strong>
                <textarea name="" id="" cols="30" rows="10" />
                <button type="submit"> Publicar </button>
            </footer>
        </article>
    );
}