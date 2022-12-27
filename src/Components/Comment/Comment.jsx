import { BsFillTrashFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'
import styles from './styles.module.css'

export function Comment() {
    return(
        <article className={styles.articleContainer}>
            <img src="https://github.com/diego3g.png" alt="Logo de Diego Fernandes" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.userProperties}>
                            <strong> Diego Fernandes</strong>
                            <span> Cerca de 2h atrás</span>
                        </div>
                        <BsFillTrashFill size={20}/>
                    </header>
                
                    <p> Muito bom Devon!! Gostei &hearts; </p>
                </div>
                <footer>
                    <button>
                        <BiLike size={20} />
                        <span>
                            Aplaudir
                            <b>30</b>
                        </span>
                    </button>
                </footer>
            </div>
        </article>
    );
}