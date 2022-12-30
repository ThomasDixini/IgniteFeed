import { BsFillTrashFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'
import styles from './styles.module.css'
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

export function Comment({content, deleteComment}) {

    const [countLike, setCountLike] = useState(0);

    function handleLikeComment() {
        setCountLike(countLike + 1)
    }

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
                        <BsFillTrashFill size={20} onClick={() => deleteComment(content)}/>
                    </header>
                
                    <p> {content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <BiLike size={20} />
                        <span>
                            Aplaudir
                            <b>{countLike}</b>
                        </span>
                    </button>
                </footer>
            </div>
        </article>
    );
}