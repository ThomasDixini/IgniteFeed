import { BsFillTrashFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'
import styles from './styles.module.css'
import { Avatar } from '../Avatar/Avatar';

export function Comment({content}) {
    return(
        <article className={styles.articleContainer}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.userProperties}>
                            <strong> Diego Fernandes</strong>
                            <span> Cerca de 2h atrás</span>
                        </div>
                        <BsFillTrashFill size={20}/>
                    </header>
                
                    <p> {content} </p>
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